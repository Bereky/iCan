import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";
import { useAuthState } from "./hooks";
import Channel from "./components/Channel";
import { ThemeSelector } from "./components/ThemeSelector";

firebase.initializeApp({
  apiKey: "AIzaSyDsMNXnHieoICvCV5F07jbaDbNU2A_IY5Q",
  authDomain: "girl-hack.firebaseapp.com",
  projectId: "girl-hack",
  storageBucket: "girl-hack.appspot.com",
  messagingSenderId: "126725322432",
  appId: "1:126725322432:web:18baf36e2ec4b231e29f25",
});

export const storage = firebase.storage();
export const auth = firebase.auth();

function App() {
  const { user, initializing } = useAuthState(firebase.auth());

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInAnonymously = async () => {
    const provider1 = new firebase.auth().signInAnonymously();
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(provider1);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full">
          <svg
            role="status"
            class="h-9 w-9 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
      <div className="flex items-center justify-center shadow-md h-screen">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-transparent transition-all">
          <h1 class="text-4xl font-light mb-6">iCan✊🏾</h1>
          <p className="mb-6 text-lg text-center font-light">
            Unity, Stregth, and Power
          </p>
          <h4 className="mb-6 text-sm font-italic flex items-center border-l-4 border-l-slate-400 pl-2 bg-slate-100 dark:bg-slate-800 py-2 rounded-r-md">
            “Women belong in all places where decisions are being made. It
            shouldn't be that women are the exception.” ― Ruth Bader Ginsburg
          </h4>
          <button
            onClick={signInWithGoogle}
            className="rounded shadow-button mb-1 pl-6 pr-8 py-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 text-gray-600 font-medium flex items-center gap-1 justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
              style={{ fill: "#000000" }}
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          <button
            onClick={signInAnonymously}
            className="rounded shadow-button mt-1 pl-6 pr-8 py-3  bg-slate-50 text-gray-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 font-medium flex items-center gap-1 justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 100 100"
              style={{ fill: "#000000" }}
            >
              <path
                fill="#c7ede6"
                d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"
              ></path>
              <path
                fill="#fff"
                d="M15.5,54h-10C5.224,54,5,53.776,5,53.5S5.224,53,5.5,53h10c0.276,0,0.5,0.224,0.5,0.5 S15.777,54,15.5,54z"
              ></path>
              <path
                fill="#fff"
                d="M18.5,54h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S18.777,54,18.5,54z"
              ></path>
              <path
                fill="#fff"
                d="M23.491,56H14.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5 S23.767,56,23.491,56z"
              ></path>
              <path
                fill="#fff"
                d="M12.5,56h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S12.777,56,12.5,56z"
              ></path>
              <path
                fill="#fff"
                d="M9.5,56h-2C7.224,56,7,55.776,7,55.5S7.224,55,7.5,55h2c0.276,0,0.5,0.224,0.5,0.5S9.777,56,9.5,56 z"
              ></path>
              <path
                fill="#fff"
                d="M15.5,58h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S15.776,58,15.5,58z"
              ></path>
              <path
                fill="#fff"
                d="M18.5,49c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,0.823,0,1,0c0.276,0,0.5-0.224,0.5-0.5C19,49.224,18.776,49,18.5,49z"
              ></path>
              <path
                fill="#fff"
                d="M18.5,51c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,4.823,0,5,0c0.276,0,0.5-0.224,0.5-0.5C19,51.224,18.776,51,18.5,51z"
              ></path>
              <path
                fill="#fff"
                d="M23.5,53c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,2.823,0,3,0c0.276,0,0.5-0.224,0.5-0.5C24,53.224,23.776,53,23.5,53z"
              ></path>
              <g>
                <path
                  fill="#fff"
                  d="M72.5,22h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S72.776,22,72.5,22z"
                ></path>
                <path
                  fill="#fff"
                  d="M76.5,22h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S76.776,22,76.5,22z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.5,24h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S81.777,24,81.5,24z"
                ></path>
                <path
                  fill="#fff"
                  d="M69.5,24h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S69.776,24,69.5,24z"
                ></path>
                <path
                  fill="#fff"
                  d="M66.47,24H64.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.97c0.276,0,0.5,0.224,0.5,0.5 S66.746,24,66.47,24z"
                ></path>
                <path
                  fill="#fff"
                  d="M75.5,20h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S75.777,20,75.5,20z"
                ></path>
                <path
                  fill="#fff"
                  d="M72.5,26h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S72.776,26,72.5,26z"
                ></path>
              </g>
              <g>
                <path
                  fill="#fdfcef"
                  d="M33.25,33.5V34h3v-0.5c0,0,4.242,0,5.5,0c2.485,0,4.5-2.015,4.5-4.5 c0-2.333-1.782-4.229-4.055-4.455c0.022-0.181,0.055-0.358,0.055-0.545c0-2.485-2.015-4.5-4.5-4.5 c-1.438,0-2.703,0.686-3.527,1.736C34.083,18.6,31.921,16.5,29.25,16.5c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282 c-0.642-0.777-1.6-1.282-2.687-1.282c-1.781,0-3.234,1.335-3.455,3.055c-0.181-0.022-0.358-0.055-0.545-0.055 c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s9.5,0,9.5,0H33.25z"
                ></path>
                <path
                  fill="#472b29"
                  d="M29.25,16c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047c-0.602-0.354-1.29-0.547-2-0.547 c-1.831,0-3.411,1.261-3.858,3.005C17.845,24.002,17.798,24,17.75,24c-2.757,0-5,2.243-5,5s2.243,5,5,5h15.5 c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-15.5c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032 l0.141,0.019c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C18.982,23.125,20.254,22,21.75,22 c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056 c0.209-0.107,0.314-0.346,0.254-0.573c-0.116-0.436-0.17-0.802-0.17-1.153c0-2.481,2.019-4.5,4.5-4.5 c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024 c0.15,0,0.296-0.069,0.392-0.192C35.388,20.563,36.529,20,37.75,20c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343 l-0.019,0.141c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185c2.055,0.205,3.604,1.906,3.604,3.958 c0,2.206-1.794,4-4,4h-5.5c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h5.5c2.757,0,5-2.243,5-5 c0-2.397-1.689-4.413-4.003-4.877c0.002-0.041,0.003-0.082,0.003-0.123c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164 C33.969,17.76,31.805,16,29.25,16L29.25,16z"
                ></path>
                <path
                  fill="#472b29"
                  d="M27.75,23c-1.403,0-2.609,0.999-2.913,2.341C24.47,25.119,24.051,25,23.625,25 c-1.202,0-2.198,0.897-2.353,2.068C21.069,27.022,20.876,27,20.687,27c-1.529,0-2.811,1.2-2.918,2.732 C17.76,29.87,17.864,29.99,18.001,30c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232c0.089-1.271,1.151-2.268,2.419-2.268 c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01c0.055,0,0.11-0.02,0.156-0.054 c0.064-0.047,0.102-0.129,0.102-0.209c0-1.034,0.841-1.875,1.875-1.875c0.447,0,0.885,0.168,1.231,0.473 c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019c0.088-0.035,0.148-0.117,0.155-0.212 c0.102-1.292,1.191-2.305,2.479-2.305c0.208,0,0.425,0.034,0.682,0.107c0.023,0.007,0.047,0.01,0.07,0.01 c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309C28.267,23.04,28.006,23,27.75,23L27.75,23z"
                ></path>
                <path
                  fill="#472b29"
                  d="M41.633,24.5c-1.326,0-2.508,0.897-2.874,2.182c-0.038,0.133,0.039,0.271,0.172,0.309 C38.955,26.997,38.978,27,39,27c0.109,0,0.209-0.072,0.24-0.182C39.545,25.748,40.529,25,41.633,25 c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003c0.121,0,0.229-0.092,0.246-0.217 c0.019-0.137-0.077-0.263-0.214-0.281C41.908,24.516,41.772,24.5,41.633,24.5L41.633,24.5z"
                ></path>
              </g>
              <g>
                <path
                  fill="#fff"
                  d="M50,79.821c-0.095-0.001-4.596-0.073-7.925-3.367c-3.538-3.501-8.317-9.403-8.365-9.462 c-0.046-0.057-4.654-5.871-4.654-13.839V37.684c-0.051-0.451-1.022-9.041,6.705-11.226C39.771,25.324,44.829,24.7,50,24.7 s10.229,0.625,14.239,1.759c7.749,2.191,6.757,10.773,6.711,11.138l-0.006,15.556c0,7.968-4.608,13.782-4.655,13.839 c-0.047,0.059-4.827,5.96-8.364,9.461C54.596,79.748,50.095,79.82,50,79.821z"
                ></path>
                <path
                  fill="#472b29"
                  d="M50,25.4c5.109,0,10.098,0.615,14.049,1.732c7.134,2.017,6.248,10.04,6.207,10.377l-0.011,0.087 v0.088v15.469c0,7.704-4.455,13.345-4.499,13.398c-0.048,0.059-4.804,5.932-8.313,9.405c-3.132,3.099-7.395,3.165-7.428,3.165 c-0.043,0-4.306-0.066-7.437-3.165c-3.51-3.473-8.266-9.346-8.312-9.403c-0.045-0.056-4.5-5.697-4.5-13.4V37.684v-0.088 l-0.011-0.087c-0.043-0.34-0.969-8.348,6.207-10.377C39.902,26.015,44.891,25.4,50,25.4 M50,24 c-5.111,0-10.221,0.595-14.43,1.785c-8.417,2.38-7.215,11.899-7.215,11.899s0,7.139,0,15.469s4.81,14.279,4.81,14.279 s4.81,5.95,8.417,9.52S50,80.521,50,80.521s4.81,0,8.417-3.57s8.417-9.52,8.417-9.52s4.81-5.949,4.81-14.279s0-15.469,0-15.469 s1.202-9.52-7.215-11.899C60.221,24.595,55.111,24,50,24L50,24z"
                ></path>
                <path
                  fill="#472b29"
                  d="M49.869,56.785c-0.843,0-1.521-0.275-2.019-0.819c-0.773-0.846-0.92-2.163-0.811-3.035 c0.004-0.026,0.172-0.87,0.432-2.717c0.019-0.136,0.147-0.231,0.282-0.213c0.137,0.019,0.232,0.146,0.213,0.282 c-0.262,1.864-0.427,2.693-0.434,2.727c-0.074,0.598-0.017,1.847,0.687,2.617c0.42,0.46,1.015,0.674,1.772,0.654 c0.121-0.012,0.253,0.103,0.259,0.241c0.005,0.138-0.103,0.254-0.241,0.259C49.961,56.784,49.915,56.785,49.869,56.785z"
                ></path>
                <path
                  fill="#472b29"
                  d="M47.911,49.072c-0.011,0-0.022-0.001-0.033-0.002c-0.137-0.018-0.233-0.143-0.216-0.28 c0.115-0.887,0.242-1.929,0.375-3.137c0.015-0.137,0.138-0.236,0.276-0.221s0.236,0.139,0.221,0.276 c-0.135,1.211-0.261,2.256-0.376,3.146C48.142,48.98,48.035,49.072,47.911,49.072z"
                ></path>
                <path
                  fill="#472b29"
                  d="M48.304,44.074c-0.127,0-0.236-0.097-0.249-0.226c-0.116-1.189-0.494-2.308-1.123-3.324 c-0.073-0.117-0.037-0.271,0.081-0.344c0.117-0.072,0.271-0.037,0.344,0.081c0.67,1.083,1.073,2.273,1.196,3.539 c0.013,0.137-0.087,0.26-0.225,0.273C48.32,44.073,48.312,44.074,48.304,44.074z"
                ></path>
                <path
                  fill="#472b29"
                  d="M42.262,53.07c-0.073,0-0.146-0.032-0.196-0.094c-0.086-0.108-0.068-0.265,0.04-0.351 c1.131-0.9,1.848-1.679,1.854-1.687c0.094-0.102,0.251-0.109,0.354-0.016c0.102,0.093,0.109,0.251,0.016,0.353 c-0.03,0.033-0.749,0.814-1.912,1.74C42.372,53.052,42.317,53.07,42.262,53.07z"
                ></path>
                <path
                  fill="#472b29"
                  d="M35.493,55.957c-1.735,0-3.508-0.678-5.103-2.546c-0.089-0.105-0.077-0.263,0.028-0.353 c0.104-0.089,0.262-0.077,0.353,0.028c3.14,3.681,7.07,2.373,9.813,0.628c0.116-0.074,0.271-0.04,0.345,0.077 c0.074,0.117,0.04,0.271-0.077,0.345C39.317,55.112,37.429,55.957,35.493,55.957z"
                ></path>
                <path
                  fill="#472b29"
                  d="M64.375,55.956c-0.87,0-1.787-0.171-2.75-0.513c-0.13-0.046-0.198-0.189-0.151-0.319 c0.046-0.13,0.189-0.198,0.319-0.152c2.893,1.029,5.349,0.395,7.293-1.886c0.091-0.105,0.25-0.117,0.353-0.028 c0.105,0.09,0.118,0.247,0.028,0.352C68.021,55.105,66.315,55.956,64.375,55.956z"
                ></path>
                <path
                  fill="#472b29"
                  d="M59.995,54.681c-0.041,0-0.082-0.01-0.12-0.031c-2.495-1.364-4.273-3.294-4.348-3.375 c-0.093-0.102-0.086-0.26,0.016-0.353c0.103-0.093,0.26-0.087,0.354,0.016c0.018,0.019,1.8,1.952,4.219,3.274 c0.121,0.066,0.166,0.218,0.099,0.339C60.169,54.634,60.083,54.681,59.995,54.681z"
                ></path>
                <path
                  fill="#472b29"
                  d="M54.426,64.457h-8.996c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.996 c0.276,0,0.5,0.224,0.5,0.5S54.703,64.457,54.426,64.457z"
                ></path>
                <path
                  fill="#472b29"
                  d="M40.02,65.624c-2.691-0.857-4.361-3.467-6.13-6.23l-0.1-0.157 c-0.075-0.116-0.041-0.271,0.076-0.345c0.115-0.075,0.27-0.041,0.345,0.076l0.101,0.157c1.793,2.802,3.341,5.221,5.86,6.022 L40.02,65.624z"
                ></path>
                <path
                  fill="#472b29"
                  d="M50,66.92c0,0-0.001,0-0.001,0c-0.043,0-4.313-0.036-7.973-0.785 c-0.135-0.028-0.222-0.16-0.195-0.295c0.028-0.135,0.157-0.223,0.295-0.195c3.611,0.738,7.833,0.774,7.875,0.775 c0.138,0.001,0.25,0.114,0.249,0.252C50.249,66.809,50.137,66.92,50,66.92z"
                ></path>
                <path
                  fill="#472b29"
                  d="M55.854,66.432c-0.123,0-0.229-0.09-0.247-0.215c-0.02-0.137,0.076-0.263,0.212-0.283 c1.469-0.208,2.736-0.473,3.767-0.788c2.625-0.803,4.236-3.223,6.102-6.025l0.105-0.158c0.077-0.115,0.233-0.145,0.347-0.069 c0.115,0.076,0.146,0.232,0.069,0.347l-0.105,0.157c-1.839,2.762-3.576,5.37-6.371,6.226c-1.055,0.323-2.348,0.594-3.843,0.805 C55.877,66.431,55.865,66.432,55.854,66.432z"
                ></path>
                <path
                  fill="#472b29"
                  d="M50,66.92c-0.137,0-0.249-0.111-0.25-0.248c-0.001-0.138,0.11-0.251,0.248-0.252 c0.019,0,1.876-0.016,4.116-0.26c0.135-0.012,0.261,0.084,0.276,0.221c0.015,0.137-0.084,0.261-0.221,0.276 c-2.267,0.247-4.148,0.263-4.167,0.263C50.001,66.92,50,66.92,50,66.92z"
                ></path>
                <path
                  fill="#472b29"
                  d="M44.86,44.538c0,0-1.142-2.285-4.569-2.285c-3.427,0-4.569,2.285-4.569,2.285 S39.148,46.823,44.86,44.538z"
                ></path>
                <path
                  fill="#472b29"
                  d="M39.941,46.058c-2.793,0-4.398-1.039-4.497-1.104c-0.21-0.14-0.283-0.414-0.17-0.64 c0.052-0.104,1.323-2.561,5.017-2.561c3.693,0,4.964,2.457,5.016,2.561c0.063,0.125,0.07,0.271,0.02,0.401 s-0.152,0.235-0.282,0.287C43.068,45.793,41.353,46.058,39.941,46.058z M36.446,44.361c1.011,0.47,3.679,1.34,7.638-0.064 c-0.508-0.595-1.654-1.543-3.793-1.543C38.081,42.753,36.926,43.775,36.446,44.361z"
                ></path>
                <path
                  fill="#472b29"
                  d="M47.43,56.961l-1.207,1.811c-0.495,0.742-1.327,1.188-2.219,1.188h-2.951 c-0.839,0-1.63-0.395-2.134-1.067l-2.627-3.502l-1.428,0.286l2.947,5.214c0.473,0.837,1.36,1.355,2.322,1.355h5.335 c0.707,0,1.386-0.281,1.886-0.781L50,58.817v-1.713L47.43,56.961z"
                ></path>
                <path
                  fill="#472b29"
                  d="M50,78.379c-5.712-5.854,0-9.281-2.856-11.852L50,66.813V78.379z"
                ></path>
                <path
                  fill="#472b29"
                  d="M45.904,36.421c0,0-8.794-6.571-13.039,0.657c1.819-1.314,5.003-3.121,11.826,0.986 C46.662,39.214,47.117,37.407,45.904,36.421z"
                ></path>
                <path
                  fill="#472b29"
                  d="M32.865,46.943c-0.033,0-0.067-0.007-0.099-0.021c-0.126-0.055-0.184-0.201-0.13-0.327 c0.028-0.066,0.719-1.61,3.465-2.16c0.128-0.028,0.267,0.06,0.294,0.196c0.027,0.135-0.061,0.267-0.196,0.294 c-2.468,0.494-3.098,1.854-3.104,1.868C33.053,46.887,32.961,46.943,32.865,46.943z"
                ></path>
                <path
                  fill="#472b29"
                  d="M35.556,44.805c-0.659,0-2.111-0.187-3.046-1.707c-0.072-0.118-0.036-0.272,0.082-0.344 c0.116-0.072,0.271-0.036,0.344,0.082c1.038,1.688,2.819,1.464,2.894,1.454c0.138-0.021,0.262,0.076,0.282,0.213 s-0.075,0.263-0.212,0.282C35.879,44.788,35.753,44.805,35.556,44.805z"
                ></path>
                <path
                  fill="#472b29"
                  d="M49.989,56.785c-0.046,0-0.093-0.001-0.14-0.003c-0.138-0.005-0.246-0.121-0.241-0.259 c0.005-0.138,0.134-0.243,0.259-0.241c0.753,0.021,1.351-0.193,1.771-0.653c0.704-0.77,0.762-2.019,0.685-2.636 c-0.001-0.003-0.435-2.193-1-7.286c-0.222-1.994,0.175-3.827,1.178-5.447c0.073-0.118,0.227-0.153,0.344-0.081 c0.117,0.073,0.153,0.227,0.081,0.344c-0.943,1.523-1.315,3.249-1.106,5.129c0.563,5.066,0.992,7.24,0.996,7.261 c0.112,0.89-0.036,2.208-0.809,3.053C51.51,56.51,50.832,56.785,49.989,56.785z"
                ></path>
                <path
                  fill="#472b29"
                  d="M55.14,57.603c-0.074,0-0.148-0.016-0.219-0.051c-0.249-0.121-0.351-0.421-0.23-0.669 c0.123-0.252,0.107-0.346,0.107-0.347c0.004,0.009-0.068-0.029-0.296-0.029c-0.26,0-0.73,0.048-1.556,0.265 c-0.039,0.01-0.096,0.025-0.164,0.035c-0.587,0.242-1.007,0.407-1.307,0.52c-0.931,0.351-2.002,0.365-2.952,0.036 c-0.331-0.115-0.798-0.29-1.456-0.56c-0.039-0.007-0.079-0.016-0.122-0.028c-1.327-0.372-1.69-0.257-1.763-0.219 c0.014,0.014,0.025,0.118,0.126,0.325c0.121,0.248,0.019,0.548-0.23,0.669c-0.245,0.121-0.547,0.019-0.668-0.23 c-0.287-0.588-0.287-1.061,0.001-1.406c0.491-0.589,1.59-0.423,2.563-0.168c0.079-0.009,0.163,0.003,0.241,0.036l0,0 c0.758,0.315,1.28,0.512,1.636,0.635c0.729,0.253,1.559,0.241,2.271-0.027c0.333-0.126,0.817-0.317,1.519-0.609c0,0,0,0,0,0 c0.085-0.036,0.174-0.046,0.262-0.033c1.074-0.268,2.187-0.423,2.683,0.181c0.283,0.346,0.284,0.813,0.002,1.39 C55.503,57.5,55.325,57.603,55.14,57.603z"
                ></path>
                <path
                  fill="#472b29"
                  d="M54.426,64.457h-8.996c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.996 c0.276,0,0.5,0.224,0.5,0.5S54.703,64.457,54.426,64.457z"
                ></path>
                <path
                  fill="#472b29"
                  d="M54.998,44.538c0,0,1.142-2.285,4.569-2.285s4.569,2.285,4.569,2.285S60.709,46.823,54.998,44.538z"
                ></path>
                <path
                  fill="#472b29"
                  d="M59.916,46.058c-1.412,0-3.127-0.265-5.104-1.056c-0.13-0.052-0.232-0.156-0.282-0.287 c-0.05-0.131-0.042-0.276,0.02-0.401c0.052-0.104,1.323-2.561,5.017-2.561s4.964,2.457,5.017,2.561 c0.113,0.226,0.04,0.5-0.17,0.64C64.314,45.02,62.708,46.058,59.916,46.058z M55.774,44.296c3.93,1.391,6.623,0.523,7.637,0.061 c-0.479-0.588-1.629-1.604-3.844-1.604C57.428,42.753,56.282,43.701,55.774,44.296z"
                ></path>
                <path
                  fill="#472b29"
                  d="M52.427,56.961l1.207,1.811c0.495,0.742,1.327,1.188,2.219,1.188h2.951 c0.839,0,1.63-0.395,2.134-1.067l2.627-3.502l1.428,0.286l-2.947,5.214c-0.473,0.837-1.36,1.355-2.322,1.355h-5.335 c-0.707,0-1.386-0.281-1.886-0.781l-2.646-2.646v-1.713L52.427,56.961z"
                ></path>
                <path
                  fill="#472b29"
                  d="M49.857,78.379c5.712-5.854,0-9.281,2.856-11.852l-2.856,0.286V78.379z"
                ></path>
                <path
                  fill="#472b29"
                  d="M53.953,36.421c0,0,8.794-6.571,13.039,0.657c-1.819-1.314-5.003-3.121-11.826,0.986 C53.195,39.214,52.74,37.407,53.953,36.421z"
                ></path>
                <path
                  fill="#472b29"
                  d="M66.992,46.944c-0.097,0-0.188-0.056-0.229-0.15c-0.014-0.03-0.651-1.377-3.104-1.867 c-0.136-0.027-0.224-0.159-0.196-0.294c0.027-0.136,0.163-0.223,0.294-0.196c2.746,0.549,3.437,2.094,3.465,2.16 c0.054,0.127-0.004,0.274-0.131,0.328C67.059,46.937,67.025,46.944,66.992,46.944z"
                ></path>
                <path
                  fill="#472b29"
                  d="M64.301,44.805c-0.197,0-0.323-0.017-0.343-0.02c-0.137-0.02-0.231-0.146-0.212-0.282 c0.019-0.136,0.141-0.234,0.282-0.213c0.073,0.01,1.855,0.234,2.894-1.454c0.073-0.118,0.229-0.154,0.344-0.082 c0.118,0.072,0.154,0.226,0.082,0.344C66.413,44.618,64.96,44.805,64.301,44.805z"
                ></path>
                <path
                  fill="#472b29"
                  d="M44.859,57.353c-0.064,0-0.128-0.024-0.177-0.073c-0.953-0.952-1.251-2.022-0.841-3.011 c0.476-1.15,1.865-1.985,3.303-1.985c0.138,0,0.25,0.112,0.25,0.25s-0.112,0.25-0.25,0.25c-1.244,0-2.438,0.705-2.841,1.676 c-0.332,0.802-0.079,1.655,0.733,2.466c0.098,0.098,0.098,0.256,0,0.354C44.987,57.329,44.923,57.353,44.859,57.353z"
                ></path>
                <g>
                  <path
                    fill="#472b29"
                    d="M55.04,57.353c-0.062,0-0.125-0.023-0.173-0.069c-0.1-0.095-0.103-0.254-0.008-0.354 c0.784-0.82,1.025-1.716,0.68-2.524c-0.402-0.94-1.53-1.622-2.683-1.622c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25 c1.344,0,2.666,0.81,3.143,1.925c0.249,0.581,0.478,1.753-0.778,3.067C55.171,57.327,55.105,57.353,55.04,57.353z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#472b29"
                    d="M58.287,73.334c-0.049,0-0.099-0.014-0.142-0.044c-0.114-0.079-0.142-0.234-0.063-0.348 c0.38-0.549,0.785-1.117,1.205-1.706c0.918-1.287,1.868-2.618,2.798-4.084c0.074-0.117,0.229-0.151,0.345-0.077 c0.117,0.074,0.151,0.229,0.077,0.345c-0.937,1.479-1.891,2.815-2.813,4.107c-0.418,0.586-0.822,1.153-1.201,1.7 C58.444,73.296,58.366,73.334,58.287,73.334z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#472b29"
                    d="M41.811,73.269c-0.077,0-0.153-0.036-0.202-0.103c-0.393-0.54-0.811-1.097-1.245-1.675 c-0.96-1.28-1.953-2.603-2.932-4.071c-0.077-0.115-0.045-0.27,0.069-0.347c0.113-0.076,0.27-0.046,0.347,0.069 c0.971,1.456,1.96,2.774,2.916,4.048c0.435,0.58,0.855,1.139,1.249,1.68c0.081,0.112,0.057,0.268-0.055,0.349 C41.913,73.253,41.862,73.269,41.811,73.269z"
                  ></path>
                </g>
              </g>
              <g>
                <path
                  fill="#fdfcef"
                  d="M75.125,75.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 c0.028-0.179,0.055-0.358,0.055-0.545c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558c-0.428-0.344-0.965-0.558-1.556-0.558 c-1.228,0-2.245,0.887-2.455,2.055c-0.179-0.028-0.358-0.055-0.545-0.055c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5 s7.5,0,7.5,0V76h7V75.5z"
                ></path>
                <path
                  fill="#472b29"
                  d="M76.875,71c-0.138,0-0.25-0.112-0.25-0.25c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C77.125,70.888,77.013,71,76.875,71z"
                ></path>
                <circle cx="70.125" cy="75.5" r=".5" fill="#472b29"></circle>
                <path
                  fill="#472b29"
                  d="M78.625,76h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.5c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377 C78.6,68.314,78.625,68.16,78.625,68c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148 c-0.182-0.049-0.321-0.195-0.36-0.379C72.205,64.165,70.766,63,69.125,63c-1.93,0-3.5,1.57-3.5,3.5 c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54c-0.179,0.102-0.396,0.118-0.556-0.01 C64.503,67.155,64.074,67,63.625,67c-0.966,0-1.792,0.691-1.963,1.644c-0.048,0.267-0.296,0.446-0.569,0.405 C60.939,69.025,60.785,69,60.625,69c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-7.5 c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006C61.213,66.82,62.336,66,63.625,66 c0.349,0,0.689,0.061,1.011,0.18c0.165-2.333,2.115-4.18,4.489-4.18c1.831,0,3.466,1.127,4.153,2.774 C73.958,64.276,74.78,64,75.625,64c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142c1.743,0.448,3.004,2.027,3.004,3.858 C82.625,74.206,80.831,76,78.625,76z"
                ></path>
                <path
                  fill="#472b29"
                  d="M73.125,75c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5C73.625,75.224,73.401,75,73.125,75z"
                ></path>
              </g>
            </svg>
            Sign in Anonymously
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 dark:text-white">
      <header
        className="flex-shrink-0 sticky top-0 z-20 py-2 bg-slate-50 dark:bg-slate-800 flex items-center justify-between px-4 sm:px-8 shadow-md"
        style={{ height: "var(--topbar-height)" }}
      >
        <a href="/">Ican chat</a>
        <div className="flex items-center gap-2">
          <ThemeSelector className="relative z-10" />

          {user ? (
            <button
              onClick={signOut}
              className="uppercase text-xs font-medium text-red-500 hover:text-white tracking-wide hover:bg-red-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-75 transition-all"
            >
              Logout
            </button>
          ) : (
            <div className="w-10"></div>
          )}
        </div>
      </header>
      <main
        className="flex-1"
        style={{ maxHeight: "calc(100% - var(--topbar-height))" }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
