import React from 'react';

const Navbar = () => {
  return (
    <div>
     <div className="navbar border-none bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>หน้าแรก</a></li>
      <li><a>ผลงาน</a></li>
      <li><a>ช้อมูลส่วนตัว</a></li>
      <li><a>ติดต่อ</a></li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Navbar;
