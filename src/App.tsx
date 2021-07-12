import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Analysis from './pages/analysis/Analysis';
import NewReport from './pages/report/NewReport';
import Report from './pages/report/Report';
import Reports from './pages/report/Reports';

export const paths = {
  reports: '/report/reports',
  report: '/report/report',
  newReport: '/report/newReport',
  analysis: '/analysis/analysis'
}

function App() {

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //   [prefersDarkMode],
  // );

  // const [theme, setTheme] = useState<Theme>(theme1);

  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  //   console.log("theme!!");
  //   const newColorScheme = e.matches ? "dark" : "light";
  //   theme.palette.type = newColorScheme;
  //   setTheme(theme);
  // });

  const theme = unstable_createMuiStrictModeTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Redirect exact path="/" to={paths.reports} />
          <Route path={paths.reports} component={Reports} />
          <Route path={paths.report} component={Report} />
          <Route path={paths.newReport} component={NewReport} />
          <Route path={paths.analysis} component={Analysis} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
