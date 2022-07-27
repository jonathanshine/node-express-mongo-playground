import NodeCache from 'node-cache';
import SensorConfigs from '../models/SensorConfigs.js';

const cache = new NodeCache({ stdTTL: 3 });

export const cacheQuery = async (req, res, next) => {
    try {
        if (cache.has('sensorconfigfile')) {
            const getConfigFile = cache.get('sensorconfigfile');
            console.log('HIT --> ', JSON.parse(getConfigFile));
            return res.send(getConfigFile);
        } else {
            const sensorConfig = await SensorConfigs.findOne().sort({ $natural: -1 });
            cache.set('sensorconfigfile', JSON.stringify(sensorConfig), 3);
            console.log('MISS');
            res.json(sensorConfig);
        }
    } catch (error) {
        next(error);
    }
};

// export const cacheQuery = async (req, res, next) => {
//     try {
//         let sensorConfig = cache.get('sensorconfigfile');

//         if (sensorConfig === null) {
//             sensorConfig = await SensorConfigs.findOne().sort({ $natural: -1 });
//             cache.set('sensorconfigfile', sensorConfig, 300);
//         }

//         res.send(sensorConfig);
//     } catch (error) {
//         next(error);
//     }
// };
