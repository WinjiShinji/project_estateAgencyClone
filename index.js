// ---- NavBar ---- //
const navBg = document.querySelector('.nav_bg')
let currentNavItem = null
let previousNavItem = null

// ShowNav
function showNav(e) {
  navBg.classList.add('active')
  previousNavItem !== null && 
  previousNavItem.nextElementSibling.classList.remove('active')
  currentNavItem = e.target 
  currentNavItem.nextElementSibling.classList.add('active')
  previousNavItem = currentNavItem
}

// HideNav
function hideNav() {
  navBg.classList.remove('active')
  currentNavItem !== null && 
  currentNavItem.nextElementSibling.classList.remove('active')
}

// ---- Modal ---- //
const modalBg = document.querySelector('.modal_bg')
function modal(method) {
  method == "show" && modalBg.classList.add('active')
  method == "hide" && modalBg.classList.remove('active')
}

// ---- TopBar ---- //
const topbarPropertyBg = document.querySelector('.topbar_property_bg')
const topbarFilterBg = document.querySelector('.topbar_filter_bg')

function showTopBarProperty(method) {
  method == "add" && topbarPropertyBg.classList.add('active')
  method == "remove" && topbarPropertyBg.classList.remove('active')
  method == "toggle" && topbarPropertyBg.classList.toggle('active')
}

function showTopBarFilter(method) {
  method == "add" && topbarFilterBg.classList.add('active')
  method == "remove" && topbarFilterBg.classList.remove('active')
  method == "toggle" && topbarFilterBg.classList.toggle('active')
}

// ---- Sign In ---- //
function signInMenu(method) {
  method == "show" && 
  document.querySelector('.sign_in_menu').classList.add('active')
  method == "hide" && 
  document.querySelector('.sign_in_menu').classList.remove('active')
}

function signInSwitch() {
  document.querySelector('.sign_in_create').classList.toggle('active')
  document.querySelector('.sign_in_signin').classList.toggle('active')
  document.querySelector('.sign_in_middle').classList.toggle('active')
  document.querySelector('.create_menu_middle').classList.toggle('active')
}

// ---- Hamburger Menu ---- //
function hamburgerBtn(method) {
  const navMenu =  document.querySelector('.navbar_menu')
  const navBg = document.querySelector('.nav_bg')
  const navLinks = document.querySelector('.nav_links')
  const signInAlt = document.querySelector('.sign_in_alt')
  
  method == 'show' &&
    navMenu.classList.add('active') &
    navBg.classList.add('active') &
    navLinks.classList.add('active') &
    signInAlt.classList.add('active') &
    document.querySelectorAll('.nav_item').forEach( item => {
      item.classList.add('active')
    })
      
  method == 'hide' &&
    navMenu.classList.remove('active') &
    navBg.classList.remove('active') &
    navLinks.classList.remove('active') &
    signInAlt.classList.remove('active') &
    document.querySelectorAll('.nav_item').forEach( item => {
      item.classList.remove('active')
    })
  
  method == 'toggle' &&
    navMenu.classList.toggle('active') &
    navBg.classList.toggle('active') &
    navLinks.classList.toggle('active') &
    signInAlt.classList.toggle('active') &
    document.querySelectorAll('.nav_item').forEach( item => {
      item.classList.toggle('active')
    })
}

// ---- Property Icon ---- //
function propertyIcon(e) {
  e.classList.toggle('active')
}

// ---- Filter Buttons ---- //
function filterBtn(e) {
  e.classList.toggle('active')
}


// ---- Hover Event Listeners ---- //
document.body.addEventListener('mouseover', (e) => {
  // NavEvent Hide
  !e.target.classList.contains('nav') && 
    hideNav() & hamburgerBtn('hide')

  // NavEvent Show
  e.target.classList.contains('nav_link') &&
    showNav(e) &
    showTopBarProperty('remove') &
    showTopBarFilter('remove')

}) 

// ---- Click Event Listeners ---- //
document.body.addEventListener('click', (e) => {
  // TopBar Events
  e.target.classList.contains('topbar_type') && 
    showTopBarProperty("toggle") & showTopBarFilter('remove')
  e.target.classList.contains('topbar_filter') &&
    showTopBarFilter("toggle") & showTopBarProperty('remove')

  // Sign In Events
  e.target.classList.contains('sign_in_event') &&
    signInMenu('show') & modal('show')
  e.target.classList.contains('sign_in_close') &&
    signInMenu('hide') & modal('hide')
  e.target.classList.contains('modal_bg') &&
    signInMenu('hide') & modal('hide')
  e.target.classList.contains('sign_in_create') &&
    signInSwitch()
  e.target.classList.contains('sign_in_signin') &&
    signInSwitch()
 
  // Responsive Events
  e.target.classList.contains('hamburger') &&
    hamburgerBtn('toggle')
  e.target.classList.contains('sign_in_alt_event') &&
    signInMenu('show') & modal('show') & hamburgerBtn('hide') 
  e.target.classList.contains('topbar_filter_alt') &&
    showTopBarFilter("toggle") & showTopBarProperty("toggle")

  // TopBar Property Icons
  e.target.parentElement.classList.contains("topbar_property_icon") &&
    propertyIcon(e.target.parentElement)

  // TopBar Filter Buttons
  e.target.classList.contains('top_filter_btn') &&
    filterBtn(e.target)












})











