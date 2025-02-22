'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gifs-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-9545afdd376d321abef5d865480dc291c4f3060b5d25c216a22a99f735b5b0183ec8b5a9d995226e71fa8cbf458382f3ef14463ad0f0f8644e50737b62600a39"' : 'data-bs-target="#xs-components-links-module-AppModule-9545afdd376d321abef5d865480dc291c4f3060b5d25c216a22a99f735b5b0183ec8b5a9d995226e71fa8cbf458382f3ef14463ad0f0f8644e50737b62600a39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9545afdd376d321abef5d865480dc291c4f3060b5d25c216a22a99f735b5b0183ec8b5a9d995226e71fa8cbf458382f3ef14463ad0f0f8644e50737b62600a39"' :
                                            'id="xs-components-links-module-AppModule-9545afdd376d321abef5d865480dc291c4f3060b5d25c216a22a99f735b5b0183ec8b5a9d995226e71fa8cbf458382f3ef14463ad0f0f8644e50737b62600a39"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' : 'data-bs-target="#xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' :
                                            'id="xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GifsModule.html" data-type="entity-link" >GifsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GifsModule-9c0157ab384341c1f9ddf14d807afbac2dd5c6d4ec406e4b36759ccff6bb5ef46ec734d9a6c17de9ebf7872f10fcca7d6c1efee519ca9f25b82660f47ea20760"' : 'data-bs-target="#xs-components-links-module-GifsModule-9c0157ab384341c1f9ddf14d807afbac2dd5c6d4ec406e4b36759ccff6bb5ef46ec734d9a6c17de9ebf7872f10fcca7d6c1efee519ca9f25b82660f47ea20760"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GifsModule-9c0157ab384341c1f9ddf14d807afbac2dd5c6d4ec406e4b36759ccff6bb5ef46ec734d9a6c17de9ebf7872f10fcca7d6c1efee519ca9f25b82660f47ea20760"' :
                                            'id="xs-components-links-module-GifsModule-9c0157ab384341c1f9ddf14d807afbac2dd5c6d4ec406e4b36759ccff6bb5ef46ec734d9a6c17de9ebf7872f10fcca7d6c1efee519ca9f25b82660f47ea20760"' }>
                                            <li class="link">
                                                <a href="components/CardListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GifsCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GifsCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-785a52499ce827d51296577f320df28f94acfa65e47f75e63e26349b6756fd568c161dc325c3693e2cf366dd38652472004af5532bbd1e9f96267856f559e451"' : 'data-bs-target="#xs-components-links-module-SharedModule-785a52499ce827d51296577f320df28f94acfa65e47f75e63e26349b6756fd568c161dc325c3693e2cf366dd38652472004af5532bbd1e9f96267856f559e451"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-785a52499ce827d51296577f320df28f94acfa65e47f75e63e26349b6756fd568c161dc325c3693e2cf366dd38652472004af5532bbd1e9f96267856f559e451"' :
                                            'id="xs-components-links-module-SharedModule-785a52499ce827d51296577f320df28f94acfa65e47f75e63e26349b6756fd568c161dc325c3693e2cf366dd38652472004af5532bbd1e9f96267856f559e451"' }>
                                            <li class="link">
                                                <a href="components/LazyImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazyImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GifsService.html" data-type="entity-link" >GifsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Analytics.html" data-type="entity-link" >Analytics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownsizedSmall.html" data-type="entity-link" >DownsizedSmall</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FixedHeight.html" data-type="entity-link" >FixedHeight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gif.html" data-type="entity-link" >Gif</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Images.html" data-type="entity-link" >Images</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Looping.html" data-type="entity-link" >Looping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Onclick.html" data-type="entity-link" >Onclick</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResponse.html" data-type="entity-link" >SearchResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/The480_WStill.html" data-type="entity-link" >The480_WStill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});