import './App.css';
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Active from './components/Active';
import Completed from './components/Completed';
import Overdue from './components/Overdue';
import AllTask from './components/AllTask';
import Layout from './components/Layout';
import TaskContext from './context/TaskContext';
import TokenContext from './context/TokenContext';
import taskReducer from './reducer/taskReducer';
import tokenReducer from './reducer/tokenReducer';
import userReducer from './reducer/userReducer';
import Header from './components/Header/Header';
import LowPriority from './components/LowPriority.jsx';
import MediumPriority from './components/MediumPriority.jsx';
import HighPriority from './components/HighPriority.jsx';

function App() {
	useEffect(() => {
		const savedTasks =
			JSON.parse(localStorage.getItem('task_management')) || [];
		console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiii');
		console.log(savedTasks);
		if (savedTasks.length !== 0)
			dispatch({ type: 'SET_TASK', payload: savedTasks });
	}, []);
	const token = JSON.parse(localStorage.getItem('authToken'));
	const [tasks, dispatch] = useReducer(taskReducer, []);
	const [userToken, tokenDispatch] = useReducer(tokenReducer, token);
	const [user, userDispatch] = useReducer(userReducer, {});



	return (
		<BrowserRouter>
			<TokenContext.Provider
				value={{ userToken, tokenDispatch, user, userDispatch }}
			>
				<TaskContext.Provider value={{ tasks, dispatch }}>
					<Routes>
						<Route path="/" element={<Header />}>
							<Route path="/" element={<Layout />}>
								<Route index element={<AllTask />} />
								<Route path="active" element={<Active />} />
								<Route path="overdue" element={<Overdue />} />
								<Route
									path="completed"
									element={<Completed />}
								/>
								<Route path="low" element={<LowPriority />} />
								<Route
									path="medium"
									element={<MediumPriority />}
								/>
								<Route path="high" element={<HighPriority />} />
							</Route>
						</Route>
					</Routes>
				</TaskContext.Provider>
			</TokenContext.Provider>
		</BrowserRouter>
	);
}

export default App;
