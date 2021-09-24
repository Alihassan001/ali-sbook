import {CommonActions} from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
}

const navigate = (name, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}


const goBack = () => {
  navigator.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
};
