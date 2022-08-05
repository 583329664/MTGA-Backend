const { FastifyResponse, logger } = require("../../utilities");


module.exports = async function ragfairRoutes(app, _opts) {

    app.post(`/client/mail/dialog/list`, async (request, reply) => {
        logger.logWarning("Dialog List not implemented yet");
        return FastifyResponse.zlibJsonReply(
            reply,
            FastifyResponse.applyBody([])
        );
    });

};