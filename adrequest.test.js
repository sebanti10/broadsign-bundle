import axios from 'axios';
import Adrequest from './adrequest';
import { contentVariables } from '../contentvariables';
import { window } from '../window';

jest.mock('axios');


jest.mock('../window', () => ({
	window: {
		BroadSignObject: {
			env: 'prod',
			org_id: 'c144f707-409e-4c95-813e-ea4a77ae4240',
			adunit_name: 'E32x869856031102606',
			at: 3,
			bid_floor: 1,
			bid_floor_cur: '',
			deal_name: 'px_firefly-video-test',
			guaranteed: '',
		}
	}
}));


describe('response codes are', ()=> {
	it('should show code 200', ()=> {
		//console.log(window.BroadSignObject);
		//console.log(contentVariables);
		const acceptData={ status: 200, success: true };
		const rejectData={ status: 400, success: false };

		axios.post.mockImplementation((url) => {
			if(url==`${contentVariables.env}/orgs/${contentVariables.orgId}/adunits/${contentVariables.adUnitName}/adrequests`)
				return Promise.resolve(acceptData);
			else
				return Promise.reject(rejectData);
		});

		/*axios.post.mockImplementation((url) => {
			if(url==`${contentVariables.env}/orgs/${contentVariables.orgId}/adunits/${contentVariables.adUnitName}/plays`)
				return Promise.resolve(acceptData);
			else
				return Promise.reject(rejectData);
		});

		return axios
		.post(`${contentVariables.env}/orgs/${contentVariables.orgId}/adunits/${contentVariables.adUnitName}/plays`)
		.then(val => {
			expect(val).toEqual(acceptData);
		});*/


		return axios
		.post(`${contentVariables.env}/orgs/${contentVariables.orgId}/adunits/${contentVariables.adUnitName}/adrequests`)
		.then(val => {
			expect(val).toEqual(acceptData);
			console.log(val);
		});


	});
});