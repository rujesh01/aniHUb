type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      this is layout
      {children}
    </div>
  );
};

export default DashboardLayout;
