import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse,
    Container
} from "shards-react";
import { CategoriesDropdown } from './CategoriesDropdown';

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
                            <CategoriesDropdown
                                dropdownOpen={dropdownOpen}
                                menuCategories={menuCategories}
                                toggleDropdown={this.toggleDropdown}
                            />
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