<template>
    <header id="header" role="banner" aria-label="banner" class="header desktop-header js-header-scrolling desktop nav-down">
        <div class="container-fluid">
            <div class="row">
                <div class="container-base container-max-width--1650">
                    <div class="row">
                        <div class="col-md-8 col-lg-8">
                            <div class="navbar-nav-container row" id="gateway-nav">
                                <nav id="desktop-nav" role="navigation" aria-label="Navigation">
                                    <ul id="desktop-only-links" class="p-md-0 mr-md-4 dropdown-ul nav--menu accessible-megamenu" role="menu">
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/sign-up/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Sign Up</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/league-format/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">League Format</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/awards/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Awards</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/captains-page/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Captain's Page</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/champions/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Champions</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/clinics/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Clinics</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/drop-in/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Drop-In</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/faq/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">FAQ</a>
                                        </li>
                                        <li class="nav-item js-nav--item" role="menuitem">
                                            <a href="/ivl/#/free-agents/" class="nav-link nav-link-toplvl" aria-label="Top Level Link" id="js-subnav-13">Free Agents</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-md-4 m-right-nav"></div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-md" id="main-nav" role="navigation" aria-label="Main Navigation">
                    <div class="container-base container-max-width--1650">
                        <div class="collapse navbar-collapse navbarToggler">
                            <div class="col-md-4 col-lg-3">
                                <a href="/ivl/#/" class="navbar-brand">
                                    <img class="logo" src="/src/assets/logo.trn.gif">
                                </a>
                            </div>
                            <div class="no-padding--tablet col-md-8 col-lg-9">
                                <ul class="navbar-nav mt-md-0" role="menu">
                                    <li class="nav-item" role="menuitem">
                                        <a href="/ivl/#/gyms/" class="nav-link" title="Apply Now">Gyms</a>
                                    </li>
                                    <li class="nav-item" role="menuitem">
                                        <a href="/ivl/#/history/" class="nav-link" title="Apply Now">History</a>
                                    </li>
                                    <li class="nav-item" role="menuitem">
                                        <a href="/ivl/#/rules/" class="nav-link" title="Apply Now">Rules</a>
                                    </li>
                                    <li class="nav-item" role="menuitem">
                                        <a href="/ivl/#/photo-album/" class="nav-link" title="Apply Now">Photo Album</a>
                                    </li>
                                    <li class="nav-item" role="menuitem">
                                        <a href="/ivl/#/referees/" class="nav-link" title="Apply Now">Referee's Page</a>
                                    </li>
                                    <li class="nav-item" role="menuitem">
                                        <a href="/ivl/#/contact/" class="nav-link" title="Apply Now">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup></script>

<style>
    .nav-down {
        top: 0px;
    }

    header.desktop {
        position: fixed;
        z-index: 1000;
        right: 0;
        left: 0;
        transition: top 0.2s ease-in-out;

        .dropdown-ul {
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            flex-direction: row;
            -webkit-box-pack: start;
            justify-content: flex-start;
            margin: 0;

            li {
                list-style: none;
            }
        }

        .m-right-nav {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .navbar {
            width: 100%;
        }

        ul {
            margin-left: 0;
        }
    }

    @media (min-width: 768px) {
        header.desktop {
            padding: 0;
            margin-top: 0;
            background: black;
            display: block;
        }
    }

    .container-fluid {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
    }

    .container-max-width--1650 {
        max-width: 1650px;
    }

    .container-base {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 768px) {
        .col-md-4 {
            flex: 0 0 33.3%;
            max-width: 33.3%;
        }
    }

    @media (min-width: 992px) {
        .col-lg-8 {
            flex: 0 0 66.6%;
            max-width: 66.6%;
        }

        header.desktop .navbar-collapse {
            justify-content: center;
        }

        .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .col-lg-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
    }

    @media (min-width: 768px) {
        #gateway-nav {
            background: transparent;
            margin-bottom: 0;
            margin-left: -8px;

            a {
                font-size: 0.8rem;
                line-height: 1.2;
            }
        }
    }

    #gateway-nav {
        z-index: 1000;
        background: transparent;
        position: relative;

        .nav-link-toplvl {
            color: white;
            text-align: left;
            padding: 1rem 10px;
        }

        a {
            font-weight: 400;
            text-decoration: none;
        }
    }

    @media screen and (min-width: 1310px) {
        header.desktop #desktop-nav {
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            align-content: center;
            margin-bottom: -1px;
        }
    }

    .js-nav--item {
        display: block;

        > a {
            position: relative;
        }
    }

    .nav-link {
        display: block;
    }

    .col-md-4 {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 768px) {
        #main-nav {
            -webkit-box-ordinal-group: 3;
            order: 2;
            border-top: 1px solid white;

            .collapse {
                margin: 0 auto;
                width: auto;
            }

            .navbar-brand {
                margin-left: 20px;
            }

            .navbar-nav {
                li {
                    border-bottom: 1px solid transparent;
                    width: auto;
                }
            }
        }

        .navbar-expand-md {
            flex-flow: row nowrap;
            justify-content: flex-start;

            .navbar-collapse {
                display: flex !important;
            }

            .navbar-nav {
                flex-direction: row;

                .nav-link {
                    padding-right: 0.5rem;
                    padding-left: 0.5rem;
                }
            }
        }

        .mt-md-0 {
            margin-top: 0 !important;
        }
    }

    #main-nav {
        padding: 0.5rem 0;
        background: white;
        z-index: 999;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        position: relative;

        .collapse {
            flex-direction: row;
        }

        .navbar-brand {
            position: relative;
            z-index: 999;
            white-space: nowrap;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            img {
                display: block;
            }
        }

        a {
            font-weight: 400;
            text-decoration: none;
        }

        .navbar-nav {
            justify-content: flex-end;
        }

        .nav-link {
            display: inline-block;
            position: relative;
            color: black;
            line-height: 1rem;
            font-weight: bold;
            text-align: center;
        }
    }

    .navbar {
        display: flex;
        align-items: center;
    }

    .navbar-collapse {
        align-items: center;
    }

    .navbar-brand {
        display: inline-block;
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        line-height: inherit;
    }

    .logo {
        width: auto;
    }

    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border-style: none;
    }

    .col-md-8 {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }

    .navbar-nav {
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    .nav-link {
        display: block;
        padding: 0.5rem 1rem;
    }
</style>
