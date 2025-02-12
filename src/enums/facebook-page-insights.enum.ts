// src/enums/post-metrics.enum.ts

export enum PageMetrics {
  PAGE_ACTIONS_POST_REACTIONS_LIKE_TOTAL = 'page_actions_post_reactions_like_total',
  PAGE_ACTIONS_POST_REACTIONS_LOVE_TOTAL = 'page_actions_post_reactions_love_total',
  PAGE_ACTIONS_POST_REACTIONS_WOW_TOTAL = 'page_actions_post_reactions_wow_total',
  PAGE_ACTIONS_POST_REACTIONS_HAHA_TOTAL = 'page_actions_post_reactions_haha_total',
  PAGE_ACTIONS_POST_REACTIONS_SORRY_TOTAL = 'page_actions_post_reactions_sorry_total',
  PAGE_ACTIONS_POST_REACTIONS_ANGER_TOTAL = 'page_actions_post_reactions_anger_total',
  PAGE_ACTIONS_POST_REACTIONS_TOTAL = 'page_actions_post_reactions_total',

  PAGE_FANS = 'page_fans',
  PAGE_FANS_LOCALE = 'page_fans_locale',
  PAGE_FANS_CITY = 'page_fans_city',
  PAGE_FANS_COUNTRY = 'page_fans_country',
  PAGE_FAN_ADDS = 'page_fan_adds',
  PAGE_FAN_ADDS_UNIQUE = 'page_fan_adds_unique',
  PAGE_FAN_REMOVES = 'page_fan_removes',
  PAGE_FAN_REMOVES_UNIQUE = 'page_fan_removes_unique',

  ADS = 'ads',
  NEWS_FEED = 'news_feed',
  PAGE_SUGGESTIONS = 'page_suggestions',
  RESTORED_LIKES_FROM_REACTIVATED_ACCOUNTS = 'restored_likes_from_reactivated_accounts',
  SEARCH = 'search',
  YOUR_PAGE = 'your_page',

  PAGE_VIDEO_VIEWS = 'page_video_views',
  PAGE_VIDEO_VIEWS_BY_UPLOADED_HOSTED = 'page_video_views_by_uploaded_hosted',
  PAGE_VIDEO_VIEWS_PAID = 'page_video_views_paid',
  PAGE_VIDEO_VIEWS_ORGANIC = 'page_video_views_organic',
  PAGE_VIDEO_VIEWS_BY_PAID_NON_PAID = 'page_video_views_by_paid_non_paid',
  PAGE_VIDEO_VIEWS_AUTOPLAYED = 'page_video_views_autoplayed',
  PAGE_VIDEO_VIEWS_CLICK_TO_PLAY = 'page_video_views_click_to_play',
  PAGE_VIDEO_VIEWS_UNIQUE = 'page_video_views_unique',
  PAGE_VIDEO_REPEAT_VIEWS = 'page_video_repeat_views',
  PAGE_VIDEO_COMPLETE_VIEWS_30S = 'page_video_complete_views_30s',
  PAGE_VIDEO_COMPLETE_VIEWS_30S_PAID = 'page_video_complete_views_30s_paid',
  PAGE_VIDEO_COMPLETE_VIEWS_30S_ORGANIC = 'page_video_complete_views_30s_organic',
  PAGE_VIDEO_COMPLETE_VIEWS_30S_AUTOPLAYED = 'page_video_complete_views_30s_autoplayed',
  PAGE_VIDEO_COMPLETE_VIEWS_30S_CLICK_TO_PLAY = 'page_video_complete_views_30s_click_to_play',
  PAGE_VIDEO_COMPLETE_VIEWS_30S_UNIQUE = 'page_video_complete_views_30s_unique',
  PAGE_VIDEO_COMPLETE_VIEWS_30S_REPEAT_VIEWS = 'page_video_complete_views_30s_repeat_views',
  POST_VIDEO_COMPLETE_VIEWS_30S_AUTOPLAYED = 'post_video_complete_views_30s_autoplayed',
  POST_VIDEO_COMPLETE_VIEWS_30S_CLICKED_TO_PLAY = 'post_video_complete_views_30s_clicked_to_play',
  POST_VIDEO_COMPLETE_VIEWS_30S_ORGANIC = 'post_video_complete_views_30s_organic',
  POST_VIDEO_COMPLETE_VIEWS_30S_PAID = 'post_video_complete_views_30s_paid',
  POST_VIDEO_COMPLETE_VIEWS_30S_UNIQUE = 'post_video_complete_views_30s_unique',
  PAGE_VIDEO_VIEWS_10S = 'page_video_views_10s',
  PAGE_VIDEO_VIEWS_10S_PAID = 'page_video_views_10s_paid',
  PAGE_VIDEO_VIEWS_10S_ORGANIC = 'page_video_views_10s_organic',
  PAGE_VIDEO_VIEWS_10S_AUTOPLAYED = 'page_video_views_10s_autoplayed',
  PAGE_VIDEO_VIEWS_10S_CLICK_TO_PLAY = 'page_video_views_10s_click_to_play',
  PAGE_VIDEO_VIEWS_10S_UNIQUE = 'page_video_views_10s_unique',
  PAGE_VIDEO_VIEWS_10S_REPEAT = 'page_video_views_10s_repeat',
  PAGE_VIDEO_VIEW_TIME = 'page_video_view_time',
  PAGE_UPLOADED_3S_TO_15S_VIEWS_RATE = 'page_uploaded_3s_to_15s_views_rate',
  PAGE_UPLOADED_VIEWS_15S_COUNT = 'page_uploaded_views_15s_count',
  PAGE_UPLOADED_VIEWS_60S_EXCLUDES_SHORTER_UNIQUE_COUNT_BY_IS_60S_RETURNING_VIEWER = 'page_uploaded_views_60s_excludes_shorter_unique_count_by_is_60s_returning_viewer',
  PAGE_UPLOADED_VIEWS_60S_EXCLUDES_SHORTER_UNIQUE_COUNT_BY_IS_60S_VIEWER = 'page_uploaded_views_60s_excludes_shorter_unique_count_by_is_60s_viewer',
  PAGE_UPLOADED_VIDEO_VIEWS = 'page_uploaded_video_views',
  PAGE_TOTAL_ACTIONS = 'page_total_actions',
  PAGE_CTA_CLICKS_LOGGED_IN_TOTAL = 'page_cta_clicks_logged_in_total',
  PAGE_CTA_CLICKS_LOGGED_IN_UNIQUE = 'page_cta_clicks_logged_in_unique',
  PAGE_GET_DIRECTIONS_CLICKS_LOGGED_IN_UNIQUE = 'page_get_directions_clicks_logged_in_unique',
  PAGE_WEBSITE_CLICKS_LOGGED_IN_UNIQUE = 'page_website_clicks_logged_in_unique',

  PAGE_POST_ENGAGEMENTS = 'page_post_engagements',
  PAGE_CONSUMPTIONS_UNIQUE = 'page_consumptions_unique',
  PAGE_CONSUMPTIONS_BY_CONSUMPTION_TYPE = 'page_consumptions_by_consumption_type',
  PAGE_CONSUMPTIONS_BY_CONSUMPTION_TYPE_UNIQUE = 'page_consumptions_by_consumption_type_unique',
  PAGE_PLACES_CHECKIN_TOTAL = 'page_places_checkin_total',
  PAGE_PLACES_CHECKIN_TOTAL_UNIQUE = 'page_places_checkin_total_unique',
  PAGE_NEGATIVE_FEEDBACK = 'page_negative_feedback',
  PAGE_NEGATIVE_FEEDBACK_UNIQUE = 'page_negative_feedback_unique',
  PAGE_NEGATIVE_FEEDBACK_BY_TYPE = 'page_negative_feedback_by_type',
  PAGE_NEGATIVE_FEEDBACK_BY_TYPE_UNIQUE = 'page_negative_feedback_by_type_unique',
  PAGE_FANS_ONLINE = 'page_fans_online',
  PAGE_FANS_ONLINE_PER_DAY = 'page_fans_online_per_day',
  PAGE_FAN_ADDS_BY_PAID_NON_PAID_UNIQUE = 'page_fan_adds_by_paid_non_paid_unique',
  PAGE_LIFETIME_ENGAGED_FOLLOWERS_UNIQUE = 'page_lifetime_engaged_followers_unique',
  PAGE_DAILY_FOLLOWS = 'page_daily_follows',
  PAGE_DAILY_FOLLOWS_UNIQUE = 'page_daily_follows_unique',
  PAGE_DAILY_UNFOLLOWS_UNIQUE = 'page_daily_unfollows_unique',
  PAGE_FOLLOWS = 'page_follows',

  PAGE_IMPRESSIONS = 'page_impressions',
  PAGE_IMPRESSIONS_UNIQUE = 'page_impressions_unique',
  PAGE_IMPRESSIONS_PAID = 'page_impressions_paid',
  PAGE_IMPRESSIONS_PAID_UNIQUE = 'page_impressions_paid_unique',
  PAGE_IMPRESSIONS_ORGANIC_V2 = 'page_impressions_organic_v2',
  PAGE_IMPRESSIONS_ORGANIC_UNIQUE_V2 = 'page_impressions_organic_unique_v2',
  PAGE_IMPRESSIONS_VIRAL = 'page_impressions_viral',
  PAGE_IMPRESSIONS_VIRAL_UNIQUE = 'page_impressions_viral_unique',
  PAGE_IMPRESSIONS_NONVIRAL = 'page_impressions_nonviral',
  PAGE_IMPRESSIONS_NONVIRAL_UNIQUE = 'page_impressions_nonviral_unique',
  PAGE_IMPRESSIONS_BY_STORY_TYPE = 'page_impressions_by_story_type',
  PAGE_IMPRESSIONS_BY_STORY_TYPE_UNIQUE = 'page_impressions_by_story_type_unique',
  PAGE_IMPRESSIONS_BY_CITY_UNIQUE = 'page_impressions_by_city_unique',
  PAGE_IMPRESSIONS_BY_COUNTRY_UNIQUE = 'page_impressions_by_country_unique',
  PAGE_IMPRESSIONS_BY_LOCALE_UNIQUE = 'page_impressions_by_locale_unique',
  PAGE_IMPRESSIONS_BY_AGE_GENDER_UNIQUE = 'page_impressions_by_age_gender_unique',
  PAGE_IMPRESSIONS_VIRAL_FREQUENCY_DISTRIBUTION = 'page_impressions_viral_frequency_distribution',

  PAGE_POSTS_IMPRESSIONS = 'page_posts_impressions',
  PAGE_POSTS_IMPRESSIONS_UNIQUE = 'page_posts_impressions_unique',
  PAGE_POSTS_IMPRESSIONS_PAID = 'page_posts_impressions_paid',
  PAGE_POSTS_IMPRESSIONS_PAID_UNIQUE = 'page_posts_impressions_paid_unique',
  PAGE_POSTS_IMPRESSIONS_ORGANIC = 'page_posts_impressions_organic',
  PAGE_POSTS_IMPRESSIONS_ORGANIC_UNIQUE = 'page_posts_impressions_organic_unique',
  PAGE_POSTS_SERVED_IMPRESSIONS_ORGANIC_UNIQUE = 'page_posts_served_impressions_organic_unique',
  PAGE_POSTS_IMPRESSIONS_VIRAL = 'page_posts_impressions_viral',
  PAGE_POSTS_IMPRESSIONS_VIRAL_UNIQUE = 'page_posts_impressions_viral_unique',
  PAGE_POSTS_IMPRESSIONS_NONVIRAL = 'page_posts_impressions_nonviral',
  PAGE_POSTS_IMPRESSIONS_NONVIRAL_UNIQUE = 'page_posts_impressions_nonviral_unique',
}
