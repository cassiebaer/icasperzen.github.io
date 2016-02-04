function Position(title,dates,desc) {
  this.title = title;
  this.dates = dates;
  this.desc = desc;
}

function Organization(name,positions,url) {
  this.name = name;
  this.positions = positions;
  this.url = url;
}

function Section(name,organizations) {
  this.name = name;
  this.organizations = organizations;
}

var work = new Section("work", [
  new Organization("North Carolina State University", [
    new Position("Security Research Assistant","2011-2012","I did some research on some security stuffs and got published."),
    new Position("FORTRAN Instructor","2008-2009","I taught le FORTRAN and won best instructor by popular vote.")
  ], "https://www.ncsu.edu/"),
  new Organization("Transoft International, Inc.", [
    new Position("Junior System Administrator","2005-2007","I put myself out of this job by automating everything I was supposed to be doing.")
  ], "http://www.ncr.com/"),
  new Organization("Office Max", [
    new Position("Lead Sales Associate","2004-2007","I sold stuff to people who needed stuff.")
  ], "http://www.officedepot.com/")
]);

var edu = new Section("education", [
  new Organization("University of Copenhagen", [
    new Position("M.Sc. - Computer Science (Programming Languages)","2013-2015","I studied the syntax and semantics of programming languages.")
  ], "http://www.ku.dk/english/"),
  new Organization("North Carolina State University", [
    new Position("B.Sc. - Nuclear Engineering","2007-2012","I studied nuclear energy."),
    new Position("B.Sc. - Computer Science","2008-2012","I studied computer science.")
  ], "https://www.ncsu.edu/")
]);

var online = new Section("online", [
  new Organization("Udacity", [
    new Position("Frontend Developer Nanodegree","2016","I learned how to make this website.")
  ], "https://www.udacity.com/"),
  new Organization("edX", [
    new Position("Software as a Service","2012","I learned about SAAS.")
  ], "https://www.edx.org/")
]);

var other = new Section("other", [
  new Organization("Institute of Nuclear Materials Management (INMM)", [
    new Position("NCSU Chapter Communications Officer","2012")
  ], "https://www.inmm.org/"),
  new Organization("American Nuclear Society (ANS)", [
    new Position("NCSU Chapter Member","2012")
  ], "http://www.ans.org/"),
  new Organization("Information Assurance Student Group (IASG)", [
    new Position("NCSU Chapter Vice President","2012")
  ], "https://getinvolved.ncsu.edu/organization/IASG/")
]);

var pubs = new Section("publications", [
  new Organization("ANS Student Conference 2012", [
    new Position("Role of Secondary Electron Emission in Shaped Electrodes with Gaseous Glow Discharges","2012")
  ], "http://students.ans.org/student-conferences"),
  new Organization("Agile2013 (Nashville)", [
    new Position("Building Regulatory-Driven Automated Test Suites","2013","Won Best Paper!")
  ], "http://agile2013.agilealliance.org/")
]);

var tPosition = _.template($("script.tPosition").html());
var tOrganization = _.template($("script.tOrganization").html());
var tSection = _.template($("script.tSection").html());

$(".resume")
  .append(tSection(work))
  .append(tSection(edu))
  .append(tSection(online))
  .append(tSection(other))
  .append(tSection(pubs));
