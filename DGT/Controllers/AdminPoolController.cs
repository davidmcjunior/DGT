using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DGT.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DGT.Controllers
{
    [ApiController]
	[Route("v0/api/[controller]")]
    public class AdminPoolController : ControllerBase
    {
        [HttpPost("admin/pool/create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<CrashRecordPool> CreatePool([FromForm] CrashRecordPool pool)
		{
            return pool;
		}

    }
}