import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Enquiries from "./pages/Enquiries";
import Messages from "./pages/Messages";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/enquiries" component={Enquiries} />
          <Route path="/messages" component={Messages} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
