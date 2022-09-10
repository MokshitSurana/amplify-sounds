import SignUp from './SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
