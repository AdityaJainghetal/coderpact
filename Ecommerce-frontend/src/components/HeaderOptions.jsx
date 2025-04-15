import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const HeaderOptions = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center rounded-md px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 gap-2">
            <img src="/images/menu.png" alt="menu" className='w-5 h-5 object-cover' />
          Shop Categories
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right text-white rounded-md bg-[#18212C] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm data-[focus]:bg-[#232F3E]"
            >
              Account settings
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm data-[focus]:bg-[#232F3E]"
            >
              Support
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm data-[focus]:bg-[#232F3E]"
            >
              License
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default HeaderOptions