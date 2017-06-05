/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

// import globalReducer from 'containers/App/reducer';
import applicationsReducer from './reducers/applicationsReducer';
import filterApplicationsReducer from 'reducers/filterApplicationsReducer';
import searchFilterReducer from 'reducers/searchFilterReducer';
import homePageAppsForSiftReducer from 'reducers/homePageAppsForSiftReducer';
import homePageUpcomingInterviewsReducer from 'reducers/homePageUpcomingInterviewsReducer';
import homePageInterviewsToScoreReducer from 'reducers/homePageInterviewsToScoreReducer';
import applicationDetailReducer from 'reducers/applicationDetailReducer';
import userPermissionReducer from 'reducers/userPermissionReducer';
import modalReducer from 'reducers/modalReducer';
import createAppPageReducer from 'reducers/createAppPageReducer';
import scheduleInterviewPageReducer from 'reducers/scheduleInterviewPageReducer';
import interviewerAvailabilityReducer from 'reducers/interviewerAvailabilityReducer';
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    applicationPageStore: applicationsReducer,
    applicationDetail: applicationDetailReducer,
    filterApplications: filterApplicationsReducer,
    searchFilter: searchFilterReducer,
    homePageAppsForSift: homePageAppsForSiftReducer,
    homePageUpcomingInterviews: homePageUpcomingInterviewsReducer,
    homePageInterviewsToScore: homePageInterviewsToScoreReducer,
    user: userPermissionReducer,
    modal : modalReducer,
    createApplicationPageStore : createAppPageReducer,
    scheduleInterviewPageStore: scheduleInterviewPageReducer,
    interviewerAvailability: interviewerAvailabilityReducer,
    // global: globalReducer,

    // ...asyncReducers,
  });
}
