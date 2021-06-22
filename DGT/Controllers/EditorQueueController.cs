using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DGT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EditorQueueController : ControllerBase
    {
        // GET: api/EditorQueue
        [HttpGet]
        public static IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/EditorQueue/5
        [HttpGet("{id}", Name = "Get")]
        public static string Get(int id)
        {
            return "value";
        }

        // POST: api/EditorQueue
        [HttpPost]
        public static void Post([FromBody] string value)
        {
        }

        // PUT: api/EditorQueue/5
        [HttpPut("{id}")]
        public static void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/EditorQueue/5
        [HttpDelete("{id}")]
        public static void Delete(int id)
        {
        }
    }
}
