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
        public static IEnumerable<int> Get()
        {
            return new int[] { 1234, 5678 };
        }
    }
}
