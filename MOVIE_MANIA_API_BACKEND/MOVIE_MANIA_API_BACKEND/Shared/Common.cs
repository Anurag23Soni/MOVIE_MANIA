using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOVIE_MANIA_API_BACKEND.Shared
{
    public class Common
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public enum Language
        {
            HINDI,
            ENGLISH
        }
        public enum Location
        {
            Unknown,
            BHOPAL,
            DELHI,
            PUNE,
            BANGALORE,
            CHENNAI
        }

        public enum listingType
        {
            Unknown,
            UP_COMING ,
            NOW_SHOWING,
        }
        

    }
}
