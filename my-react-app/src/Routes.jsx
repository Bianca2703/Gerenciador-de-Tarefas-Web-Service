function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*<Route path="/projects" element={<Projects />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/projects/:id" element={<Projects />} />
              */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
