import Dashboard from "./pages/dashboard/Dashboard";
import { PageLayout } from "./components/PageLayout";

const App = () => {
  return (
    <PageLayout jc="flex-start">
      <Dashboard />
    </PageLayout>
  );
};

export default App;
