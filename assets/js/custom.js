var users = [
  { token: 12, name: "John Verghese", yob: 1972, villa: "101-1", ent: "10:23:12", reg: "", vax: "VAX", mobile: "9876543210", govtId: "Aadhaar 9876 5432 1038", secretCode: "3210" },
  { token: 13, name: "Jane Verghese", yob: 1975, villa: "101-2", ent: "10:34:23", reg: "", vax: "VAX", mobile: "9876543211", govtId: "Aadhaar 9876 5432 1039", secretCode: "3214"},
  { token: 14, name: "Jeno Verghese", yob: 1978, villa: "101-3", ent: "10:45:39", reg: "", vax: "VAX", mobile: "9876543212", govtId: "Aadhaar 9876 5432 1040", secretCode: "3221"},
  { token: 15, name: "Mary Verghese", yob: 1985, villa: "222-11", ent: "11:45:34", reg: "11:48:12", vax: "VAX", mobile: "9876543213", govtId: "Aadhaar 9876 5432 1041", secretCode: "3228"},
  { token: 16, name: "Jerone Verghese", yob: 1986, villa: "222-12", ent: "12:01:07", reg: "", vax: "VAX", mobile: "9876543214", govtId: "Aadhaar 9876 5432 1042", secretCode: "3237"},
  { token: 17, name: "Jude Verghese", yob: 1987, villa: "222-13", ent: "12:23:12", reg: "", vax: "VAX", mobile: "9876543215", govtId: "Aadhaar 9876 5432 1043", secretCode: "3243"},
  { token: 18, name: "Joseph Verghese", yob: 1988, villa: "222-14", ent: "13:04:01", reg: "", vax: "VAX", mobile: "9876543216", govtId: "Aadhaar 9876 5432 1044", secretCode: "3249"},
  { token: 19, name: "Joe Verghese", yob: 1989, villa: "222-15", ent: "14:23:12", reg: "", vax: "VAX", mobile: "9876543217", govtId: "Aadhaar 9876 5432 1045", secretCode: "3254"},
];

function populateUsers(users){
	$("#user-list tbody tr").remove();
	users.forEach((u) => {
		$("#user-list tbody").append(
			'<tr>'
				+ '<td><button class="btn btn-secondary btn-primary-grad text-uppercase text-dark" type="button" onclick="showUserDetails('+u.token+')"></button></td>'
				+ '<td>'+u.token+'</td>'
				+ '<td>'+u.name+'</td>'
				+ '<td>'+u.yob+'</td>'
				+ '<td>'+u.villa+'</td>'
				+ '<td>'+u.ent+'</td>'
				+ '<td>'+(u.reg || '&nbsp;')+'</td>'
				+ '<td>'+u.vax+'</td>'
			+ '</tr>' 
		)
	})
}

function searchUser(){
	populateUsers(users.filter(u => u.name.toLowerCase().indexOf($('#search').val().trim().toLowerCase()) > -1))
	return false;
}

populateUsers(users);


function showUserDetails(token){
    let user = users.find(u => u.token == token);
    if(user){
        $('.detail-wrapper').removeClass('hidden');
        
        $('#form-token').val(user.token);
        $('#form-name').val(user.name);
        $('#form-mobile').val(user.mobile);
        $('#form-govtId').val(user.govtId);
        $('#form-secretCode').val(user.secretCode);
    }
}