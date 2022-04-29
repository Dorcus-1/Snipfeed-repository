import './sidebar1.css'
export default function Sidebar() {
return (
    <div className="sidebar">
        <div className="topIcons">
      <div className="sideIcons">
      <i class="fa-solid fa-grip"></i><p>Dashboard</p>
        </div>
        <div className="sideIcons">
        <i class="fa-solid fa-user-group"></i>
          <p>My page</p>
          </div>
      <div className="sideIcons">
      <i class="fa-solid fa-crown"></i>
          <p>Monetize</p>
          </div>
      <div className="sideIcons">
      <i class="fa-solid fa-chart-simple"></i>
          <p>Analytics</p>
          </div>
      <div className="sideIcons">
      <i class="fa-solid fa-hand-holding-dollar"></i>
          <p>Earnings</p>
          </div>
      <div className="sideIcons">
      <i class="fa-regular fa-face-smile"></i>
          <p>Referrals</p>
          </div>
      <div className="sideIcons">
      <i class="fa-solid fa-gear"></i>
          <p>Settings</p>
        </div>
      
        </div>
        <div className="downIcons">
        <div className="dIcons">
        <i class="fa-regular fa-moon"></i>
          <p>icon</p>
        </div>
        <div className="dIcon">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Logout</p>
        </div>
        </div>
    </div>
)
}