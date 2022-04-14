import Main from '@/components/landing/Main';
import Navigation from '@/molecules/Navigation';

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <Main />
    </div>
  );
};

export default Index;
