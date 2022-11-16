import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
const Sidebar = (props: SidebarProps) => {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="menu-overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transaction"
            icon="menu-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="menu-message" href="/member" />
          <MenuItem title="Card" icon="menu-card" href="/member" />
          <MenuItem title="Rewards" icon="menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="menu-logout" href="/signin" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;
