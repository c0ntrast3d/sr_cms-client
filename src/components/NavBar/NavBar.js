import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse,
    Container
} from "shards-react";

export default class NavBar extends Component {

    state = {
        dropdownOpen: false,
        collapseOpen: false,
        menuCategories: [
            { id: 1, name: "Drinks" },
            { id: 2, name: "Starters" }
        ]
    };

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen

        });
    }

    toggleNavbar = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    }

    render() {
        const { collapseOpen, dropdownOpen, menuCategories } = this.state;
        return (
            <Navbar type="dark" theme="secondary" expand="md">
                <Container>
                    <NavbarBrand href="#">SM CMS</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />

                    <Collapse open={collapseOpen} navbar>
                        <Nav navbar>
                            <Dropdown
                                open={dropdownOpen}
                                toggle={this.toggleDropdown}
                            >
                                <DropdownToggle nav caret>
                                    Menu
                            </DropdownToggle>
                                <DropdownMenu>
                                    {
                                        menuCategories.map(category => (
                                            <DropdownItem>{category.name}</DropdownItem>
                                        ))
                                    }
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink href="#">
                                    Events
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    About
                            </NavLink>
                            </NavItem>
                        </Nav>

                        <Nav navbar className="ml-auto">
                            <InputGroup size="sm" seamless>
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput className="border-0" placeholder="Search..." />
                            </InputGroup>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}