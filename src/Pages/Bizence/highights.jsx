import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function highlight() {
  return (
<div>
<MDBDropdown group>
        <MDBDropdownToggle color='primary'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown group>
        <MDBDropdownToggle color='success'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown group>
        <MDBDropdownToggle color='warning'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown group>
        <MDBDropdownToggle color='info'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown group>
        <MDBDropdownToggle color='danger'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown group>
        <MDBDropdownToggle color='dark'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='light'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='link'>Action</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}