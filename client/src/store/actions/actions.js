import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import authSlice from '../slices/authSlice';
import mainSlice from '../slices/mainSlice';

export const {
  loginHandler,
  setTokenHandler,
  loginCheckStatusHandler,
  logoutHandler,
  authErrorHandler,
} = authSlice.actions;

export const {
  showUserInfo,
  hideUserInfo,
  addCharacters,
  showDetails,
  setTotalPageAmount,
  mainErrorHandler,
} = mainSlice.actions;

export const signInFetch = someData => {
  return dispatch => {
    axios
      .post(`api/auth/sign`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: someData,
      })
      .then(res => {
        // console.log('послали запрос', res);
        if (res.status === 201) {
          console.log('sign in successed');
        }
      })
      .catch(err => dispatch(authErrorHandler(err.response.data.message)));
  };
};

export const loginFetch = someData => {
  console.log('loginFetch');
  return dispatch => {
    axios
      .post(`api/auth/login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: someData,
      })
      .then(res => {
        // console.log('послали запрос', res);
        if (res.status === 201) {
          console.log('log in successed');
          dispatch(loginHandler(res.data.user));
          dispatch(setTokenHandler(res.data.token));
        }
      })
      .catch(err => dispatch(authErrorHandler(err.response.data.message)));
  };
};

export const fetchCharacters = number => {
  return dispatch => {
    console.log(number, 'number');
    let pageNumber = number ? number : 0;
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${pageNumber + 1}`)
      .then(response => {
        dispatch(setTotalPageAmount(response.data.info.pages));
        dispatch(
          addCharacters(
            response.data.results.map(character => ({
              name: character.name,
              id: character.id,
              image: character.image,
              gender: character.gender,
              species: character.species,
              status: character.status,
              location: character.location,
              origin: character.origin,
            })),
          ),
        );
      })
      .catch(err => dispatch(mainErrorHandler(err.response.data.message)));
  };
};

export const showUserInfoHandler = (token, userId) => {
  return dispatch => {
    axios
      .get('api/userInfo', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => dispatch(showUserInfo(response.data.user)))
      .catch(err => dispatch(mainErrorHandler(err.response.data.message)));
  };
};
