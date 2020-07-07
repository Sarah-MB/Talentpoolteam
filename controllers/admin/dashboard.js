module.exports = {
  faq: (req, res) => {
    res.render('Pages/admin-dash-faq', { pageName: 'Faq' });
  },

  employerMessages: (req, res) => {
    res.render('Pages/admin-dash-employer-msg', { pageName: 'Messages for employer' });
  },

   messages: (req, res) => {
     res.render('Pages/admin-dash-messages', { pageName: 'Admin dashboard messages'});
   },


   allEmployers: (req, res) => {
    res.render('Pages/admin-dash-employers', { pageName: 'Admin | All Employers'})
   },
  
   dashboard: (req, res) => {
    res.render('Pages/admin-dashboard', { pageName: 'Admin dashboard',path: "admin-dashboard"});
  },

  adminVerification: (req, res) => {
    res.render('Pages/admin-verification', {pageName: 'Admin Verification'})
  },

  adminSettings: (req, res) => {
    res.render('Pages/admin-settings', {pageName: 'Admin Settings',path: "admin-settings"})
  },

  adminEmployee: (req, res) => {
    res.render('Pages/admin-viewEmployee', {pageName: 'Talent Pool | View Employee',path: "admin-viewEmployee"})
  }
}
