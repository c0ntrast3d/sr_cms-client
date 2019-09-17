import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'shards-react';

export const CategoriesDropdown = (props) => {
    return (
        <Dropdown
            open={props.dropdownOpen}
            toggle={props.toggleDropdown}
        >
            <DropdownToggle nav caret>
                Menu
            </DropdownToggle>
            <DropdownMenu>
                {
                    props.menuCategories.map(category => (
                        <DropdownItem>{category.name}</DropdownItem>
                    ))
                }
            </DropdownMenu>
        </Dropdown>
    )
}

