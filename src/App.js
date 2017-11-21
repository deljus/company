import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PAGES_URLS } from './config';
import { IndexPage, DepartmentsPage, NotFoundPage, EmployeesPage } from './pages';
import { MainLayout } from './components';
import store from './core/store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route
                        path={PAGES_URLS.INDEX.URL}
                        component={IndexPage}
                        exact
                    />
                    <Route
                        path={PAGES_URLS.DEPARTMENTS.URL}
                        component={DepartmentsPage}
                        exact
                    />
                    <Route
                        path={PAGES_URLS.EMPLOYEES.URL}
                        component={EmployeesPage}
                        exact
                    />
                    <Route
                        path="*"
                        component={NotFoundPage}
                    />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    </Provider>
);

export default App;