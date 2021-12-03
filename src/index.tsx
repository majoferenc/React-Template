import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './pages/app/App'
import { store } from './app/store'
import * as serviceWorker from './serviceWorker'
import './i18n';

const httpLink = new HttpLink({ uri: 'https://48p1r2roz4.sse.codesandbox.io' });

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
			<Suspense fallback="loading">
				<App />
			</ Suspense>
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

export default client
