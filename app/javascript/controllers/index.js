// Import and register all your controllers from the importmap under controllers/*

import { application } from 'controllers/application'

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from '@hotwired/stimulus-loading'
eagerLoadControllersFrom('controllers', application)

// import Flatpickr
import Flatpickr from 'stimulus-flatpickr'
application.register('flatpickr', Flatpickr)

// import InputSelect
import InputSelect from './input_select'
application.register('inputselect', InputSelect)
