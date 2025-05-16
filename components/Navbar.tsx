import React from "react";

const Navbar = () => {
  return (
    // fixed 让导航栏悬浮，w-full 占满宽度，z-50 确保在最上层
    <nav className="fixed top-0 w-full z-50">
      {/* 主容器：添加背景色，模糊效果和内边距 */}
      <div className="backdrop-blur-sm bg-black/30 border-b border-gray-800">
        {/* 内容容器：控制最大宽度和居中 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 弹性布局容器：对齐导航栏内的元素 */}
          <div className="flex items-center justify-between h-16">
            {/* Logo 区域 */}
            <div className="flex-shrink-0">
              <span className="text-white font-bold">Logo</span>
            </div>

            {/* 导航链接区域 */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>

            {/* 右侧按钮区域 */}
            <div className="flex items-center space-x-4">
              Lorem
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
