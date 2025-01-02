import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() { 
    return (
        <div>
            {/* Wrap the routes inside BrowserRouter for routing management */}
            <BrowserRouter>
                <Routes>
                    {/* Define a layout route to include a common layout structure (nav, footer) for all child routes */}
                    <Route path="/allen" element={<Layout />}> 
                        <Route path="/allen" element={<Landing />} /> {/* Define the route for the landing page */}
                        <Route path="/allen/online-coaching-class-11" element={<Class11Program />} /> {/* Define the route for the NEET Class 11 program page */}
                        <Route path="/allen/online-coaching-class-12" element={<Class12Program />} /> {/* Define the route for the NEET Class 12 program page */}
                        <Route path="*" element={<ErrorPage />} /> {/* Define a wildcard route to handle 404 errors for unknown paths */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// Function component to display a 404 error message for unmatched routes
function ErrorPage() {
    // Return the JSX for the component
    return (
        <div>
            {/* Display the 404 error message */}
            <h1>404 Page not found</h1>
        </div>
    );
}

// Function component that serves as a layout wrapper containing navigation, content, and footer
function Layout() {
    // Return the JSX for the layout component
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={{ display: "flex", padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", paddingLeft: "2rem", gap: "1rem" }}>
                    <Link to="/allen"><img src="https://seeklogo.com/images/A/allen-career-institute-logo-39A50CCD87-seeklogo.com.png" style={{ height: "1.7rem" }} /> </Link>{" "}
                    <Link to="/allen/online-coaching-class-11" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Courses</Link>{" "}
                    <Link to="/allen/online-coaching-class-12" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Test Series</Link>{" "}
                    <Link to="/allen/online-coaching-class-12" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Scholarships</Link>{" "}
                    <Link to="/allen/online-coaching-class-12" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Results</Link>{" "}
                    <Link to="/allen/online-coaching-class-12" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Study Materials</Link>{" "}
                    <Link to="/allen/online-coaching-class-12" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>About us</Link>{" "}
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", width: "50%" }}>
                    <Link to="/allen/schedule-a-call-back" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Talk to us</Link>
                    <Link to="/allen/login" style={{ fontSize: "0.98rem", textDecoration: "none", color: "black", padding: "0.2rem", fontFamily: "Roboto, sans-serif" }}>Login</Link>
                </div>
            </div>

            {/* Main content section with Outlet to render the child routes */}
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>

            {/* Footer section with basic information */}
            <footer>
                <div
                    style={{
                        background: "#f1f1f1",
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "3rem",
                        fontFamily: "Roboto, sans-serif",
                    }}
                >
                    {/** Column 1 */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>About</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>About us</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Blog</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>News</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                            MyExam
                            <br />
                            EduBlogs
                        </p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Privacy policy</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Public notice</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Careers</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                            Dhoni Inspires
                            <br />
                            NEET Aspirants
                        </p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                            Dhoni Inspires
                            <br />
                            JEE Aspirants
                        </p>
                    </div>

                    {/** Column 2 */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>Help & Support</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Refund policy</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Transfer policy</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                            Terms &
                            <br />
                            Conditions
                        </p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Contact us</p>
                    </div>

                    {/** Column 3 */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>Popular goals</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>NEET UG</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>JEE Advanced</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>6th to 10th</p>
                    </div>

                    {/** Column 4 */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>Courses</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Online Courses</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Distance Learning</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Online Test Series</p>
                    </div>

                    {/** Column 5 */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>Centers</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Kota</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Bangalore</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Indore</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>Delhi</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>More centres</p>
                    </div>

                    {/** Column 6 */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>JEE Main</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>JEE Advanced</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>NEET UG</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 400 }}>AIIMS</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Landing component to render the homepage content
function Landing() {
    return (
        <div>
            <h1>Welcome to Allen!</h1>
        </div>
    );
}

// Program components for Class 11 and Class 12
function Class11Program() {
    return (
        <div>
            <h2>Class 11 NEET Program</h2>
            {/* Add additional content here */}
        </div>
    );
}

function Class12Program() {
    return (
        <div>
            <h2>Class 12 NEET Program</h2>
            {/* Add additional content here */}
        </div>
    );
}

export default App;
