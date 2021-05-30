import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'
import firebase from './Firebase/firebase'
import { ToastProvider } from 'react-toast-notifications'
import SignUp from './Views/SingUp';
import Recruiters from './Views/Recruiters';
import MockView from './Views/MockView';

const getusers = (firestore) => firestore.collection('users').get();

function App() {
	const firestore = firebase.firestore();
	const [isLogin, setIsLogin] = useState(false);
	const [isRecruiter, setIsRecruiter] = useState(false);
	const [isApplicant, setIsApplicant] = useState(false);


	const getpremissions = async (userMail) => {
		let dataUsers = await getusers(firestore);
		dataUsers.forEach(doc => {
			if (userMail === doc.id) {
				let permission = doc.data().permission;
				if (permission === 'recruiter') {
					setIsRecruiter(true);
				} else if (permission === 'applicant') {
					setIsApplicant(true);
				}
			}
		});
	}

	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				setIsLogin(true);
				const credentialFirebase = firebase.auth().currentUser;
				getpremissions(credentialFirebase.email);
			} else {
				setIsLogin(false);
				console.log('no user')
			}
		});
	});

	return (
		<ToastProvider>
			<div>
				<BrowserRouter>
					<Switch>
						{isLogin === true ?
							<Fragment>
								{isApplicant &&
								<>
								<Route exact path="/" render={() =>
									<Welcome
										isLogin={isLogin}
									/>}
								/>
								<Route exact path="/profile" component={UserProfile} />
								</>
								}
								{isRecruiter &&
									<Fragment>
									<Route exact path="/recruiters" component={Recruiters} />
									<Route exact path="/mock" component={MockView} />
									</Fragment>
								}
								
							</Fragment>
							:
							<Fragment>
								<Route exact path="/" component={Login} />
								<Route exact path="/signup" component={SignUp} />
							</Fragment>
						}
					</Switch>
				</BrowserRouter>
			</div>
		</ToastProvider>
	);
}

export default App;
