using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static MOVIE_MANIA_API_BACKEND.Shared.Common;

namespace MOVIE_MANIA_API_BACKEND.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public Language Language { get; set;}
        public Location Location { get; set; }

        public string Plot { get; set; }

        public string Poster { get; set; }

        public List<string> SoundEffects { get; set; }

        public List<string> Stills { get; set; }

        public string Title { get; set; }

        public string ImdbId { get; set; }

        public listingType listingType { get; set; }

        public Double ImdbRating { get; set; }
    }
   
}
