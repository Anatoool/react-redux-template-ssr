import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader, IdeaTile } from 'components';
import uuid from 'uuid/v1';
import { getIdeas, clearIdeasList, changeIdeaOperationId } from 'store/actions/ideas.actions';

import './ideas-container.sass';

const mapStateToProps = ({ ideasState }) => ({
  ideasState,
});

const mapDispatchToProps = dispatch => ({
  getIdeas: bindActionCreators(getIdeas, dispatch),
  clearIdeasList: bindActionCreators(clearIdeasList, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
export class IdeasContainer extends React.Component {
  static propTypes = {
    ideasState: PropTypes.object,
    getIdeas: PropTypes.func,
    clearIdeasList: PropTypes.func,
  };

  static defaultProps = {
    ideasState: {},
    getIdeas: () => {},
    clearIdeasList: () => {},
  };

  state = {
    page: 1,
    isLoading: false,
    allIdeasLoaded: false,
  };

  async componentDidMount() {
    this._isMounted = true;
    this.toggleLoading(true);
    await this.props.getIdeas({ page: 1, pageSize: 25, operationId: uuid() });
    this.setState({ page: 1 });
    this.toggleLoading(false);
    this.loadAdditionalIdeas();

    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    this._isMounted = false;
    changeIdeaOperationId(uuid(), 'list');
    window.removeEventListener('scroll', this.onScroll, false);
    this.props.clearIdeasList();
  }

  onScroll = async () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1024)) {
      await this.loadAdditionalIdeas();
      await this.loadAdditionalIdeas();
    }
  };

  loadAdditionalIdeas = async () => {
    const { isLoading } = this.state;
    if (isLoading) return;

    const { page: currentPage } = this.state;
    const { ideasState } = this.props;
    const { list = {} } = ideasState;
    const { pagination = {} } = list;

    // if (currentPage >= pagination.totalPages) {
    //   this.setState({ allIdeasLoaded: true });
    //   return;
    // }

    this.toggleLoading(true);
    const response = await this.props.getIdeas({ page: currentPage + 1, pageSize: 25, operationId: uuid() }) || {};
    this.toggleLoading(false);

    if (response.success !== false) {
      this.setState({ page: currentPage + 1 });
    }
  };

  toggleLoading = newState => this._isMounted && this.setState({ isLoading: newState });

  render() {
    const { isLoading, allImagesLoaded } = this.state;
    const { ideasState } = this.props;
    const { list = {} } = ideasState;
    const { ideas = [] } = list;

    return (
      <div className="ideas-container container-full-width">
        <div className="ideas-container__list">
          {ideas.map((item, index) => {
            return (
              <div key={index} className="ideas-container__tile">
                <IdeaTile idea={item}/>
              </div>
            );
          })}
        </div>
        <Loader isShow={isLoading}>
          <div style={{ marginTop: '15px' }} />
        </Loader>
      </div>
    );
  }
}
