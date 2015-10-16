LogKey = {
    USER_CREATED:           'userCreated',
    USER_UPDATED:           'userUpdated',
    AVATARS_DELETED:        'avatarsDeleted',
    EVENT_CREATED:          'eventCreated',
    EVENT_UPDATED:          'eventUpdated',
    EVENT_IMAGES_DELETED:   'eventImageDeleted',
    GOOGLE_MAPS_ERROR:      'googleMapsError',
    STRIPE_ERROR:           'stripeError',
    REPORT_CREATED:         'reportCreated',
    PARTICIPATION_CREATED:  'participationCreated',
    PARTICIPATION_REMOVED:  'participationRemoved',
    NEW_AFFILIATE:          'newAffiliate',
    NEW_CONTACT_MESSAGE:    'newContactMessage',
    REWARD_WAS_ADMIN:       'rewardWasAdmin',
    REWARD_NEW_SUBSCRIPTION:'rewardNewSubscription',
    NEW_SUBSCRIPTION:       'newSubscription',
    ELIGIBLE_REWARD:        'eligibleReward',
    REWARD_CREDITS:         'rewardCredits',
    REWARD_REFUND:          'rewardRefund',
    EMAIL_VERIFY:           'emailVerify',
    EMAIL_WELCOME:          'emailWelcome',
    EMAIL_PARTICIPATING:    'emailParticipating',
    EMAIL_RETURN:           'emailReturn',
    NEXMO_MESSAGE_SUCCESS:  'nexmoMessageSuccess',
    NEXMO_MESSAGE_ERROR:    'nexmoMessageError'
};

log = function (options) {
    if (!_.has(options, 'key')) {
        throw new Error('A key is required');
    }

    var doc = {
        message: TAPi18n.__('log.' + options.key, _.omit(options, 'key', 'details'), DEFAULT_LANG)
    };

    if (_.has(options, 'details')) {
        doc.details = options.details;
    }

    Logs.insert(doc);
};
