import encode from './encode';

export const getOpenGraphImage =
  (title: string, readingTime: string, date: string): string => {
    const parsedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    if (title.length > 95) {
      const truncatedTitle = `${title.substring(0, 95)}...`;

      return `https://res.cloudinary.com/aacevski/image/upload/w_1200,h_630,q_100/l_text:jetbrains.ttf_48:${encode(truncatedTitle)}%2Cco_rgb:AEAAAA,c_fit,w_1200,h_240/fl_layer_apply,g_south_west,x_33,y_80/l_text:jetbrains.ttf_24:aacevski.com%20%E2%80%A2%20${encode(parsedDate)}%20%E2%80%A2%20${encode(readingTime)}%2Cco_rgb:8C8C8C,c_fit,w_1200,h_240/fl_layer_apply,g_south_west,x_33,y_30/Cover_drt9xa.jpg`;
    }

    return `https://res.cloudinary.com/aacevski/image/upload/w_1200,h_630,q_100/l_text:jetbrains.ttf_48:${encode(title)}%2Cco_rgb:AEAAAA,c_fit,w_1200,h_240/fl_layer_apply,g_south_west,x_33,y_80/l_text:jetbrains.ttf_24:aacevski.com%20%E2%80%A2%20${encode(parsedDate)}%20%E2%80%A2%20${encode(readingTime)}%2Cco_rgb:8C8C8C,c_fit,w_1200,h_240/fl_layer_apply,g_south_west,x_33,y_30/Cover_drt9xa.jpg`;
  };
