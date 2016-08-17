import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
	name: [
		validator('presence', true)
	],
	players: [
		validator('hasMany')
	]
});

export default DS.Model.extend(Validations, {
	name: DS.attr('string'),
	players: DS.hasMany('player')
});
