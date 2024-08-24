import HeaderNavComponent from "@/components/nav/header-nav-component";
import SidebarNavComponent from "@/components/nav/sidebar-nav-component";


export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="flex flex-row">
      <SidebarNavComponent/>
      <div className="flex flex-col w-full">
      <HeaderNavComponent/>
      {children}
      </div>
    </div>
    
  
</>
  );
}
