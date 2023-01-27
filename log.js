let log = {
    info: function (info) {
        console.log('info: ' + info);
    },
    warning:function (warning) {
        console.log('warning: ' + warning);
    },
    error:function (error) {
        console.log('Error: ' + error);
    }
};
module.exports = log