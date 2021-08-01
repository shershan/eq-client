import React from 'react';
import { Action } from '../interfaces/action';
import { ActionTypes } from './action-types';

export const serviceRequest = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.SERVICES_REQUEST
  });
}

export const ticketRequest = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.TICKET_REQUEST
  });
}
