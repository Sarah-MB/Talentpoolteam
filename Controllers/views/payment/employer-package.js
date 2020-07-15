/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
const { Package, Feature } = require('../../../Models/index');


exports.getAll = async (req, res) => {
  try {
    const packages = await Package.findAll({
      include: { 
        model: Feature,
        as: 'features' 
      }
    });

    //Success Response
    const data = await packages;
    res.render('pages/eemployer/getAllpackages', {
      pageName: 'Packages',
      data
    })

  } catch (error) {
    req.flash( 'error', 'Something went wrong' )
    return res.redirect('back')
  }
};

exports.packageGet = async (req, res) => {
  try {
    const { package_id } = req.params;

    const query = await Package.findOne({
      where: {
        package_id,
      },
      include: {
        model: Feature,
        as: 'features'
      }
    });
    if (!query) {
      req.flash( 'error', 'Package Not Found' )
      return res.redirect('back')
    }

    //Success Response
    const data = await query;
    res.render('pages/employer/package-detail', {
      pageName: `${data.package_name} Package`,
      data
    })
  } catch (err) {
      req.flash( 'Error', 'Something went wrong' )
      return res.redirect('back')
  }
};
