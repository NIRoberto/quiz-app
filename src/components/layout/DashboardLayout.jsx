// DashboardLayout.js

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Common header for dashboard */}
      <header>...</header>

      {/* Dashboard content */}
      {children}

      {/* Common footer for dashboard */}
      <footer>...</footer>
    </div>
  );
};

export default DashboardLayout;
