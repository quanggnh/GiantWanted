var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointSpring' )
  var i457 = data
  i456.spring = i457[0]
  i456.damper = i457[1]
  i456.targetPosition = i457[2]
  return i456
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointMotor' )
  var i459 = data
  i458.m_TargetVelocity = i459[0]
  i458.m_Force = i459[1]
  i458.m_FreeSpin = i459[2]
  return i458
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointLimits' )
  var i461 = data
  i460.m_Min = i461[0]
  i460.m_Max = i461[1]
  i460.m_Bounciness = i461[2]
  i460.m_BounceMinVelocity = i461[3]
  i460.m_ContactDistance = i461[4]
  i460.minBounce = i461[5]
  i460.maxBounce = i461[6]
  return i460
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointDrive' )
  var i463 = data
  i462.m_PositionSpring = i463[0]
  i462.m_PositionDamper = i463[1]
  i462.m_MaximumForce = i463[2]
  return i462
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i465 = data
  i464.m_Spring = i465[0]
  i464.m_Damper = i465[1]
  return i464
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i467 = data
  i466.m_Limit = i467[0]
  i466.m_Bounciness = i467[1]
  i466.m_ContactDistance = i467[2]
  return i466
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i469 = data
  i468.m_ExtremumSlip = i469[0]
  i468.m_ExtremumValue = i469[1]
  i468.m_AsymptoteSlip = i469[2]
  i468.m_AsymptoteValue = i469[3]
  i468.m_Stiffness = i469[4]
  return i468
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i471 = data
  i470.m_LowerAngle = i471[0]
  i470.m_UpperAngle = i471[1]
  return i470
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i473 = data
  i472.m_MotorSpeed = i473[0]
  i472.m_MaximumMotorTorque = i473[1]
  return i472
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i475 = data
  i474.m_DampingRatio = i475[0]
  i474.m_Frequency = i475[1]
  i474.m_Angle = i475[2]
  return i474
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i477 = data
  i476.m_LowerTranslation = i477[0]
  i476.m_UpperTranslation = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i478 = root || new pc.UnityMaterial()
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'shader')
  i478.renderQueue = i479[3]
  i478.enableInstancing = !!i479[4]
  var i481 = i479[5]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i481[i + 0]) );
  }
  i478.floatParameters = i480
  var i483 = i479[6]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i483[i + 0]) );
  }
  i478.colorParameters = i482
  var i485 = i479[7]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i485[i + 0]) );
  }
  i478.vectorParameters = i484
  var i487 = i479[8]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i487[i + 0]) );
  }
  i478.textureParameters = i486
  var i489 = i479[9]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i489[i + 0]) );
  }
  i478.materialFlags = i488
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i493 = data
  i492.name = i493[0]
  i492.value = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = new pc.Color(i497[1], i497[2], i497[3], i497[4])
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = new pc.Vec4( i501[1], i501[2], i501[3], i501[4] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i505 = data
  i504.name = i505[0]
  request.r(i505[1], i505[2], 0, i504, 'value')
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i509 = data
  i508.name = i509[0]
  i508.enabled = !!i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i511 = data
  i510.name = i511[0]
  i510.halfPrecision = !!i511[1]
  i510.vertexCount = i511[2]
  i510.aabb = i511[3]
  var i513 = i511[4]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( !!i513[i + 0] );
  }
  i510.streams = i512
  i510.vertices = i511[5]
  var i515 = i511[6]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i515[i + 0]) );
  }
  i510.subMeshes = i514
  var i517 = i511[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 16) {
    i516.push( new pc.Mat4().setData(i517[i + 0], i517[i + 1], i517[i + 2], i517[i + 3],  i517[i + 4], i517[i + 5], i517[i + 6], i517[i + 7],  i517[i + 8], i517[i + 9], i517[i + 10], i517[i + 11],  i517[i + 12], i517[i + 13], i517[i + 14], i517[i + 15]) );
  }
  i510.bindposes = i516
  var i519 = i511[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i519[i + 0]) );
  }
  i510.blendShapes = i518
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i525 = data
  i524.triangles = i525[0]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i531 = data
  i530.name = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i533[i + 0]) );
  }
  i530.frames = i532
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i535 = data
  i534.name = i535[0]
  i534.width = i535[1]
  i534.height = i535[2]
  i534.mipmapCount = i535[3]
  i534.anisoLevel = i535[4]
  i534.filterMode = i535[5]
  i534.hdr = !!i535[6]
  i534.format = i535[7]
  i534.wrapMode = i535[8]
  i534.alphaIsTransparency = !!i535[9]
  i534.alphaSource = i535[10]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i537 = data
  i536.position = new pc.Vec3( i537[0], i537[1], i537[2] )
  i536.scale = new pc.Vec3( i537[3], i537[4], i537[5] )
  i536.rotation = new pc.Quat(i537[6], i537[7], i537[8], i537[9])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i539 = data
  i538.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i539[0], i538.main)
  i538.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i539[1], i538.colorBySpeed)
  i538.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i539[2], i538.colorOverLifetime)
  i538.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i539[3], i538.emission)
  i538.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i539[4], i538.rotationBySpeed)
  i538.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i539[5], i538.rotationOverLifetime)
  i538.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i539[6], i538.shape)
  i538.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i539[7], i538.sizeBySpeed)
  i538.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i539[8], i538.sizeOverLifetime)
  i538.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i539[9], i538.textureSheetAnimation)
  i538.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i539[10], i538.velocityOverLifetime)
  i538.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i539[11], i538.noise)
  i538.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i539[12], i538.inheritVelocity)
  i538.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i539[13], i538.forceOverLifetime)
  i538.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i539[14], i538.limitVelocityOverLifetime)
  i538.useAutoRandomSeed = !!i539[15]
  i538.randomSeed = i539[16]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemMain()
  var i541 = data
  i540.duration = i541[0]
  i540.loop = !!i541[1]
  i540.prewarm = !!i541[2]
  i540.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.startDelay)
  i540.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[4], i540.startLifetime)
  i540.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[5], i540.startSpeed)
  i540.startSize3D = !!i541[6]
  i540.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[7], i540.startSizeX)
  i540.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[8], i540.startSizeY)
  i540.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[9], i540.startSizeZ)
  i540.startRotation3D = !!i541[10]
  i540.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[11], i540.startRotationX)
  i540.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[12], i540.startRotationY)
  i540.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[13], i540.startRotationZ)
  i540.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i541[14], i540.startColor)
  i540.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[15], i540.gravityModifier)
  i540.simulationSpace = i541[16]
  request.r(i541[17], i541[18], 0, i540, 'customSimulationSpace')
  i540.simulationSpeed = i541[19]
  i540.useUnscaledTime = !!i541[20]
  i540.scalingMode = i541[21]
  i540.playOnAwake = !!i541[22]
  i540.maxParticles = i541[23]
  i540.emitterVelocityMode = i541[24]
  i540.stopAction = i541[25]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i542 = root || new pc.MinMaxCurve()
  var i543 = data
  i542.mode = i543[0]
  i542.curveMin = new pc.AnimationCurve( { keys_flow: i543[1] } )
  i542.curveMax = new pc.AnimationCurve( { keys_flow: i543[2] } )
  i542.curveMultiplier = i543[3]
  i542.constantMin = i543[4]
  i542.constantMax = i543[5]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i544 = root || new pc.MinMaxGradient()
  var i545 = data
  i544.mode = i545[0]
  i544.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i545[1], i544.gradientMin)
  i544.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i545[2], i544.gradientMax)
  i544.colorMin = new pc.Color(i545[3], i545[4], i545[5], i545[6])
  i544.colorMax = new pc.Color(i545[7], i545[8], i545[9], i545[10])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i547 = data
  i546.mode = i547[0]
  var i549 = i547[1]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i549[i + 0]) );
  }
  i546.colorKeys = i548
  var i551 = i547[2]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i551[i + 0]) );
  }
  i546.alphaKeys = i550
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemColorBySpeed()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i553[1], i552.color)
  i552.range = new pc.Vec2( i553[2], i553[3] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i557 = data
  i556.color = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  i556.time = i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i561 = data
  i560.alpha = i561[0]
  i560.time = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemColorOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i563[1], i562.color)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemEmitter()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.rateOverTime)
  i564.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.rateOverDistance)
  var i567 = i565[3]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i567[i + 0]) );
  }
  i564.bursts = i566
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemBurst()
  var i571 = data
  i570.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[0], i570.count)
  i570.cycleCount = i571[1]
  i570.minCount = i571[2]
  i570.maxCount = i571[3]
  i570.repeatInterval = i571[4]
  i570.time = i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemRotationBySpeed()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.separateAxes = !!i573[4]
  i572.range = new pc.Vec2( i573[5], i573[6] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemRotationOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.separateAxes = !!i575[4]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemShape()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.shapeType = i577[1]
  i576.randomDirectionAmount = i577[2]
  i576.sphericalDirectionAmount = i577[3]
  i576.randomPositionAmount = i577[4]
  i576.alignToDirection = !!i577[5]
  i576.radius = i577[6]
  i576.radiusMode = i577[7]
  i576.radiusSpread = i577[8]
  i576.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[9], i576.radiusSpeed)
  i576.radiusThickness = i577[10]
  i576.angle = i577[11]
  i576.length = i577[12]
  i576.boxThickness = new pc.Vec3( i577[13], i577[14], i577[15] )
  i576.meshShapeType = i577[16]
  request.r(i577[17], i577[18], 0, i576, 'mesh')
  request.r(i577[19], i577[20], 0, i576, 'meshRenderer')
  request.r(i577[21], i577[22], 0, i576, 'skinnedMeshRenderer')
  i576.useMeshMaterialIndex = !!i577[23]
  i576.meshMaterialIndex = i577[24]
  i576.useMeshColors = !!i577[25]
  i576.normalOffset = i577[26]
  i576.arc = i577[27]
  i576.arcMode = i577[28]
  i576.arcSpread = i577[29]
  i576.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[30], i576.arcSpeed)
  i576.donutRadius = i577[31]
  i576.position = new pc.Vec3( i577[32], i577[33], i577[34] )
  i576.rotation = new pc.Vec3( i577[35], i577[36], i577[37] )
  i576.scale = new pc.Vec3( i577[38], i577[39], i577[40] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemSizeBySpeed()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.separateAxes = !!i579[4]
  i578.range = new pc.Vec2( i579[5], i579[6] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemSizeOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.separateAxes = !!i581[4]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.mode = i583[1]
  i582.animation = i583[2]
  i582.numTilesX = i583[3]
  i582.numTilesY = i583[4]
  i582.useRandomRow = !!i583[5]
  i582.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[6], i582.frameOverTime)
  i582.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[7], i582.startFrame)
  i582.cycleCount = i583[8]
  i582.rowIndex = i583[9]
  i582.flipU = i583[10]
  i582.flipV = i583[11]
  i582.spriteCount = i583[12]
  var i585 = i583[13]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sprites = i584
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.speedModifier)
  i588.space = i589[5]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemNoise()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.separateAxes = !!i591[1]
  i590.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.strengthX)
  i590.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.strengthY)
  i590.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.strengthZ)
  i590.frequency = i591[5]
  i590.damping = !!i591[6]
  i590.octaveCount = i591[7]
  i590.octaveMultiplier = i591[8]
  i590.octaveScale = i591[9]
  i590.quality = i591[10]
  i590.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[11], i590.scrollSpeed)
  i590.scrollSpeedMultiplier = i591[12]
  i590.remapEnabled = !!i591[13]
  i590.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[14], i590.remapX)
  i590.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[15], i590.remapY)
  i590.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[16], i590.remapZ)
  i590.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[17], i590.positionAmount)
  i590.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[18], i590.rotationAmount)
  i590.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[19], i590.sizeAmount)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemInheritVelocity()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.mode = i593[1]
  i592.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.curve)
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemForceOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.space = i595[4]
  i594.randomized = !!i595[5]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[1], i596.limitX)
  i596.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.limitY)
  i596.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.limitZ)
  i596.dampen = i597[4]
  i596.separateAxes = !!i597[5]
  i596.space = i597[6]
  i596.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[7], i596.drag)
  i596.multiplyDragByParticleSize = !!i597[8]
  i596.multiplyDragByParticleVelocity = !!i597[9]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i599 = data
  i598.enabled = !!i599[0]
  request.r(i599[1], i599[2], 0, i598, 'sharedMaterial')
  var i601 = i599[3]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[4]
  i598.shadowCastingMode = i599[5]
  i598.sortingLayerID = i599[6]
  i598.sortingOrder = i599[7]
  i598.lightmapIndex = i599[8]
  i598.lightmapSceneIndex = i599[9]
  i598.lightmapScaleOffset = new pc.Vec4( i599[10], i599[11], i599[12], i599[13] )
  i598.lightProbeUsage = i599[14]
  i598.reflectionProbeUsage = i599[15]
  request.r(i599[16], i599[17], 0, i598, 'mesh')
  i598.meshCount = i599[18]
  i598.activeVertexStreamsCount = i599[19]
  i598.alignment = i599[20]
  i598.renderMode = i599[21]
  i598.sortMode = i599[22]
  i598.lengthScale = i599[23]
  i598.velocityScale = i599[24]
  i598.cameraVelocityScale = i599[25]
  i598.normalDirection = i599[26]
  i598.sortingFudge = i599[27]
  i598.minParticleSize = i599[28]
  i598.maxParticleSize = i599[29]
  i598.pivot = new pc.Vec3( i599[30], i599[31], i599[32] )
  request.r(i599[33], i599[34], 0, i598, 'trailMaterial')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i605 = data
  i604.name = i605[0]
  i604.tag = i605[1]
  i604.enabled = !!i605[2]
  i604.isStatic = !!i605[3]
  i604.layer = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i607 = data
  i606.name = i607[0]
  i606.atlasId = i607[1]
  i606.mipmapCount = i607[2]
  i606.hdr = !!i607[3]
  i606.size = i607[4]
  i606.anisoLevel = i607[5]
  i606.filterMode = i607[6]
  i606.wrapMode = i607[7]
  var i609 = i607[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 4) {
    i608.push( UnityEngine.Rect.MinMaxRect(i609[i + 0], i609[i + 1], i609[i + 2], i609[i + 3]) );
  }
  i606.rects = i608
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i613 = data
  i612.name = i613[0]
  i612.index = i613[1]
  i612.startup = !!i613[2]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i615 = data
  i614.enabled = !!i615[0]
  i614.aspect = i615[1]
  i614.orthographic = !!i615[2]
  i614.orthographicSize = i615[3]
  i614.backgroundColor = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.nearClipPlane = i615[8]
  i614.farClipPlane = i615[9]
  i614.fieldOfView = i615[10]
  i614.depth = i615[11]
  i614.clearFlags = i615[12]
  i614.cullingMask = i615[13]
  i614.rect = i615[14]
  request.r(i615[15], i615[16], 0, i614, 'targetTexture')
  return i614
}

Deserializers["IECControl"] = function (request, data, root) {
  var i616 = root || request.c( 'IECControl' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'monsterbackscene')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'sharedMesh')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'additionalVertexStreams')
  i620.enabled = !!i621[2]
  request.r(i621[3], i621[4], 0, i620, 'sharedMaterial')
  var i623 = i621[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.sharedMaterials = i622
  i620.receiveShadows = !!i621[6]
  i620.shadowCastingMode = i621[7]
  i620.sortingLayerID = i621[8]
  i620.sortingOrder = i621[9]
  i620.lightmapIndex = i621[10]
  i620.lightmapSceneIndex = i621[11]
  i620.lightmapScaleOffset = new pc.Vec4( i621[12], i621[13], i621[14], i621[15] )
  i620.lightProbeUsage = i621[16]
  i620.reflectionProbeUsage = i621[17]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i625 = data
  i624.enabled = !!i625[0]
  i624.isTrigger = !!i625[1]
  request.r(i625[2], i625[3], 0, i624, 'material')
  request.r(i625[4], i625[5], 0, i624, 'sharedMesh')
  i624.convex = !!i625[6]
  return i624
}

Deserializers["Apartment"] = function (request, data, root) {
  var i626 = root || request.c( 'Apartment' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'buildCam')
  return i626
}

Deserializers["BrokenBuilding"] = function (request, data, root) {
  var i628 = root || request.c( 'BrokenBuilding' )
  var i629 = data
  i628.IsBreakAll = !!i629[0]
  var i631 = i629[1]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i628.brickList1 = i630
  var i633 = i629[2]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 1, i632, '')
  }
  i628.brickList2 = i632
  var i635 = i629[3]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 1, i634, '')
  }
  i628.brickList3 = i634
  var i637 = i629[4]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i628.brickList4 = i636
  var i639 = i629[5]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 1, i638, '')
  }
  i628.brickList5 = i638
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i643 = data
  i642.mass = i643[0]
  i642.drag = i643[1]
  i642.angularDrag = i643[2]
  i642.useGravity = !!i643[3]
  i642.isKinematic = !!i643[4]
  i642.constraints = i643[5]
  i642.maxAngularVelocity = i643[6]
  i642.collisionDetectionMode = i643[7]
  i642.interpolation = i643[8]
  return i642
}

Deserializers["Brick"] = function (request, data, root) {
  var i644 = root || request.c( 'Brick' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'BrickRigid')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.type = i647[1]
  i646.color = new pc.Color(i647[2], i647[3], i647[4], i647[5])
  i646.cullingMask = i647[6]
  i646.intensity = i647[7]
  i646.range = i647[8]
  i646.spotAngle = i647[9]
  i646.shadows = i647[10]
  i646.shadowNormalBias = i647[11]
  i646.shadowBias = i647[12]
  i646.shadowStrength = i647[13]
  i646.shadowResolution = i647[14]
  i646.lightmapBakeType = i647[15]
  i646.renderMode = i647[16]
  request.r(i647[17], i647[18], 0, i646, 'cookie')
  i646.cookieSize = i647[19]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i649 = data
  i648.pivot = new pc.Vec2( i649[0], i649[1] )
  i648.anchorMin = new pc.Vec2( i649[2], i649[3] )
  i648.anchorMax = new pc.Vec2( i649[4], i649[5] )
  i648.sizeDelta = new pc.Vec2( i649[6], i649[7] )
  i648.anchoredPosition3D = new pc.Vec3( i649[8], i649[9], i649[10] )
  i648.rotation = new pc.Quat(i649[11], i649[12], i649[13], i649[14])
  i648.scale = new pc.Vec3( i649[15], i649[16], i649[17] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i651 = data
  i650.enabled = !!i651[0]
  i650.planeDistance = i651[1]
  i650.referencePixelsPerUnit = i651[2]
  i650.isFallbackOverlay = !!i651[3]
  i650.renderMode = i651[4]
  i650.renderOrder = i651[5]
  i650.sortingLayerName = i651[6]
  i650.sortingOrder = i651[7]
  i650.scaleFactor = i651[8]
  request.r(i651[9], i651[10], 0, i650, 'worldCamera')
  i650.overrideSorting = !!i651[11]
  i650.pixelPerfect = !!i651[12]
  i650.targetDisplay = i651[13]
  i650.overridePixelPerfect = !!i651[14]
  return i650
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i653 = data
  i652.m_UiScaleMode = i653[0]
  i652.m_ReferencePixelsPerUnit = i653[1]
  i652.m_ScaleFactor = i653[2]
  i652.m_ReferenceResolution = new pc.Vec2( i653[3], i653[4] )
  i652.m_ScreenMatchMode = i653[5]
  i652.m_MatchWidthOrHeight = i653[6]
  i652.m_PhysicalUnit = i653[7]
  i652.m_FallbackScreenDPI = i653[8]
  i652.m_DefaultSpriteDPI = i653[9]
  i652.m_DynamicPixelsPerUnit = i653[10]
  return i652
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i655 = data
  i654.m_IgnoreReversedGraphics = !!i655[0]
  i654.m_BlockingObjects = i655[1]
  i654.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i655[2] )
  return i654
}

Deserializers["Scope"] = function (request, data, root) {
  var i656 = root || request.c( 'Scope' )
  var i657 = data
  var i659 = i657[0]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 1, i658, '')
  }
  i656.scopeImgList = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i663 = data
  i662.cullTransparentMesh = !!i663[0]
  return i662
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Image' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'm_Sprite')
  i664.m_Type = i665[2]
  i664.m_PreserveAspect = !!i665[3]
  i664.m_FillCenter = !!i665[4]
  i664.m_FillMethod = i665[5]
  i664.m_FillAmount = i665[6]
  i664.m_FillClockwise = !!i665[7]
  i664.m_FillOrigin = i665[8]
  i664.m_UseSpriteMesh = !!i665[9]
  i664.m_PixelsPerUnitMultiplier = i665[10]
  request.r(i665[11], i665[12], 0, i664, 'm_Material')
  i664.m_Maskable = !!i665[13]
  i664.m_Color = new pc.Color(i665[14], i665[15], i665[16], i665[17])
  i664.m_RaycastTarget = !!i665[18]
  return i664
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Mask' )
  var i667 = data
  i666.m_ShowMaskGraphic = !!i667[0]
  return i666
}

Deserializers["CutoutMask"] = function (request, data, root) {
  var i668 = root || request.c( 'CutoutMask' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_Material')
  request.r(i669[2], i669[3], 0, i668, 'm_Sprite')
  i668.m_Type = i669[4]
  i668.m_PreserveAspect = !!i669[5]
  i668.m_FillCenter = !!i669[6]
  i668.m_FillMethod = i669[7]
  i668.m_FillAmount = i669[8]
  i668.m_FillClockwise = !!i669[9]
  i668.m_FillOrigin = i669[10]
  i668.m_UseSpriteMesh = !!i669[11]
  i668.m_PixelsPerUnitMultiplier = i669[12]
  i668.m_Maskable = !!i669[13]
  i668.m_Color = new pc.Color(i669[14], i669[15], i669[16], i669[17])
  i668.m_RaycastTarget = !!i669[18]
  return i668
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_FirstSelected')
  i670.m_sendNavigationEvents = !!i671[2]
  i670.m_DragThreshold = i671[3]
  return i670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i673 = data
  i672.m_HorizontalAxis = i673[0]
  i672.m_VerticalAxis = i673[1]
  i672.m_SubmitButton = i673[2]
  i672.m_CancelButton = i673[3]
  i672.m_InputActionsPerSecond = i673[4]
  i672.m_RepeatDelay = i673[5]
  i672.m_ForceModuleActive = !!i673[6]
  return i672
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i675 = data
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i677 = data
  i676.playAutomatically = !!i677[0]
  request.r(i677[1], i677[2], 0, i676, 'clip')
  var i679 = i677[3]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.clips = i678
  i676.wrapMode = i677[4]
  i676.enabled = !!i677[5]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'animatorController')
  i682.updateMode = i683[2]
  var i685 = i683[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.humanBones = i684
  i682.enabled = !!i683[4]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i689 = data
  i688.enabled = !!i689[0]
  request.r(i689[1], i689[2], 0, i688, 'sharedMaterial')
  var i691 = i689[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.sharedMaterials = i690
  i688.receiveShadows = !!i689[4]
  i688.shadowCastingMode = i689[5]
  i688.sortingLayerID = i689[6]
  i688.sortingOrder = i689[7]
  i688.lightmapIndex = i689[8]
  i688.lightmapSceneIndex = i689[9]
  i688.lightmapScaleOffset = new pc.Vec4( i689[10], i689[11], i689[12], i689[13] )
  i688.lightProbeUsage = i689[14]
  i688.reflectionProbeUsage = i689[15]
  request.r(i689[16], i689[17], 0, i688, 'sharedMesh')
  var i693 = i689[18]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i688.bones = i692
  i688.updateWhenOffscreen = !!i689[19]
  i688.localBounds = i689[20]
  request.r(i689[21], i689[22], 0, i688, 'rootBone')
  var i695 = i689[23]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i695[i + 0]) );
  }
  i688.blendShapesWeights = i694
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i699 = data
  i698.weight = i699[0]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i701 = data
  i700.ambientIntensity = i701[0]
  i700.reflectionIntensity = i701[1]
  i700.ambientMode = i701[2]
  i700.ambientLight = new pc.Color(i701[3], i701[4], i701[5], i701[6])
  i700.ambientSkyColor = new pc.Color(i701[7], i701[8], i701[9], i701[10])
  i700.ambientGroundColor = new pc.Color(i701[11], i701[12], i701[13], i701[14])
  i700.ambientEquatorColor = new pc.Color(i701[15], i701[16], i701[17], i701[18])
  i700.fogColor = new pc.Color(i701[19], i701[20], i701[21], i701[22])
  i700.fogEndDistance = i701[23]
  i700.fogStartDistance = i701[24]
  i700.fogDensity = i701[25]
  i700.fog = !!i701[26]
  request.r(i701[27], i701[28], 0, i700, 'skybox')
  i700.fogMode = i701[29]
  var i703 = i701[30]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i703[i + 0]) );
  }
  i700.lightmaps = i702
  i700.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i701[31], i700.lightProbes)
  i700.lightmapsMode = i701[32]
  i700.environmentLightingMode = i701[33]
  i700.ambientProbe = new pc.SphericalHarmonicsL2(i701[34])
  i700.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i701[35])
  i700.useReferenceAmbientProbe = !!i701[36]
  request.r(i701[37], i701[38], 0, i700, 'customReflection')
  request.r(i701[39], i701[40], 0, i700, 'defaultReflection')
  i700.defaultReflectionMode = i701[41]
  i700.defaultReflectionResolution = i701[42]
  i700.sunLightObjectId = i701[43]
  i700.pixelLightCount = i701[44]
  i700.defaultReflectionHDR = !!i701[45]
  i700.hasLightDataAsset = !!i701[46]
  i700.hasManualGenerate = !!i701[47]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'lightmapColor')
  request.r(i707[2], i707[3], 0, i706, 'lightmapDirection')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i708 = root || new UnityEngine.LightProbes()
  var i709 = data
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(i719[i + 0]);
  }
  i716.invalidShaderVariants = i718
  i716.name = i717[1]
  i716.guid = i717[2]
  var i721 = i717[3]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.shaderDefinedKeywords = i720
  var i723 = i717[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i723[i + 0]) );
  }
  i716.passes = i722
  var i725 = i717[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i725[i + 0]) );
  }
  i716.usePasses = i724
  var i727 = i717[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i727[i + 0]) );
  }
  i716.defaultParameterValues = i726
  request.r(i717[7], i717[8], 0, i716, 'unityFallbackShader')
  i716.readDepth = !!i717[9]
  i716.isCreatedByShaderGraph = !!i717[10]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i734 = root || new pc.UnityShaderPass()
  var i735 = data
  i734.id = i735[0]
  i734.subShaderIndex = i735[1]
  i734.name = i735[2]
  i734.passType = i735[3]
  i734.usePass = !!i735[4]
  i734.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[5], i734.zTest)
  i734.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[6], i734.zWrite)
  i734.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[7], i734.culling)
  i734.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i735[8], i734.blending)
  i734.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i735[9], i734.alphaBlending)
  i734.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[10], i734.colorWriteMask)
  i734.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[11], i734.offsetUnits)
  i734.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[12], i734.offsetFactor)
  i734.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[13], i734.stencilRef)
  i734.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[14], i734.stencilReadMask)
  i734.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[15], i734.stencilWriteMask)
  i734.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[16], i734.stencilOp)
  i734.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[17], i734.stencilOpFront)
  i734.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[18], i734.stencilOpBack)
  var i737 = i735[19]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i737[i + 0]) );
  }
  i734.tags = i736
  var i739 = i735[20]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.passDefinedKeywords = i738
  var i741 = i735[21]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i741[i + 0]) );
  }
  i734.passDefinedKeywordGroups = i740
  var i743 = i735[22]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i734.variants = i742
  var i745 = i735[23]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i745[i + 0]) );
  }
  i734.excludedVariants = i744
  i734.hasDepthReader = !!i735[24]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i747 = data
  i746.val = i747[0]
  i746.name = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i749 = data
  i748.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.src)
  i748.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.dst)
  i748.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.op)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i751 = data
  i750.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[0], i750.pass)
  i750.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[1], i750.fail)
  i750.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[2], i750.zFail)
  i750.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[3], i750.comp)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i755 = data
  i754.name = i755[0]
  i754.value = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i758.keywords = i760
  i758.hasDiscard = !!i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i765 = data
  i764.passId = i765[0]
  i764.subShaderIndex = i765[1]
  var i767 = i765[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i764.keywords = i766
  i764.vertexProgram = i765[3]
  i764.fragmentProgram = i765[4]
  i764.readDepth = !!i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'shader')
  i770.pass = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i775 = data
  i774.name = i775[0]
  i774.type = i775[1]
  i774.value = new pc.Vec4( i775[2], i775[3], i775[4], i775[5] )
  i774.textureValue = i775[6]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'texture')
  i776.aabb = i777[3]
  i776.vertices = i777[4]
  i776.triangles = i777[5]
  i776.textureRect = UnityEngine.Rect.MinMaxRect(i777[6], i777[7], i777[8], i777[9])
  i776.packedRect = UnityEngine.Rect.MinMaxRect(i777[10], i777[11], i777[12], i777[13])
  i776.border = new pc.Vec4( i777[14], i777[15], i777[16], i777[17] )
  i776.transparency = i777[18]
  i776.bounds = i777[19]
  i776.pixelsPerUnit = i777[20]
  i776.textureWidth = i777[21]
  i776.textureHeight = i777[22]
  i776.nativeSize = new pc.Vec2( i777[23], i777[24] )
  i776.pivot = new pc.Vec2( i777[25], i777[26] )
  i776.textureRectOffset = new pc.Vec2( i777[27], i777[28] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i779 = data
  i778.name = i779[0]
  i778.wrapMode = i779[1]
  i778.isLooping = !!i779[2]
  i778.length = i779[3]
  var i781 = i779[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i781[i + 0]) );
  }
  i778.curves = i780
  var i783 = i779[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i783[i + 0]) );
  }
  i778.events = i782
  i778.halfPrecision = !!i779[6]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i787 = data
  i786.path = i787[0]
  i786.componentType = i787[1]
  i786.property = i787[2]
  i786.keys = i787[3]
  var i789 = i787[4]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i789[i + 0]) );
  }
  i786.objectReferenceKeys = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i793 = data
  i792.time = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'value')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i797 = data
  i796.functionName = i797[0]
  i796.floatParameter = i797[1]
  i796.intParameter = i797[2]
  i796.stringParameter = i797[3]
  request.r(i797[4], i797[5], 0, i796, 'objectReferenceParameter')
  i796.time = i797[6]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i799 = data
  i798.name = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i801[i + 0]) );
  }
  i798.states = i800
  var i803 = i799[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i803[i + 0]) );
  }
  i798.layers = i802
  var i805 = i799[3]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i805[i + 0]) );
  }
  i798.parameters = i804
  var i807 = i799[4]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i798.animationClips = i806
  i798.HasSubStateMachines = !!i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i811 = data
  i810.cycleOffset = i811[0]
  i810.cycleOffsetParameter = i811[1]
  i810.cycleOffsetParameterActive = !!i811[2]
  i810.mirror = !!i811[3]
  i810.mirrorParameter = i811[4]
  i810.mirrorParameterActive = !!i811[5]
  i810.motionId = i811[6]
  i810.nameHash = i811[7]
  i810.fullPathHash = i811[8]
  i810.speed = i811[9]
  i810.speedParameter = i811[10]
  i810.speedParameterActive = !!i811[11]
  i810.tag = i811[12]
  i810.name = i811[13]
  i810.layer = i811[14]
  i810.writeDefaultValues = !!i811[15]
  var i813 = i811[16]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i813[i + 0]) );
  }
  i810.transitions = i812
  var i815 = i811[17]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i810.behaviours = i814
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i819 = data
  i818.fullPath = i819[0]
  i818.canTransitionToSelf = !!i819[1]
  i818.duration = i819[2]
  i818.exitTime = i819[3]
  i818.hasExitTime = !!i819[4]
  i818.hasFixedDuration = !!i819[5]
  i818.interruptionSource = i819[6]
  i818.offset = i819[7]
  i818.orderedInterruption = !!i819[8]
  i818.destinationStateNameHash = i819[9]
  i818.destinationStateMachineId = i819[10]
  i818.isExit = !!i819[11]
  i818.mute = !!i819[12]
  i818.solo = !!i819[13]
  var i821 = i819[14]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i821[i + 0]) );
  }
  i818.conditions = i820
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i827 = data
  i826.blendingMode = i827[0]
  i826.defaultWeight = i827[1]
  i826.name = i827[2]
  i826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i827[3], i826.stateMachine)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i829 = data
  i828.id = i829[0]
  i828.defaultStateNameHash = i829[1]
  var i831 = i829[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i831[i + 0]) );
  }
  i828.entryTransitions = i830
  var i833 = i829[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i833[i + 0]) );
  }
  i828.anyStateTransitions = i832
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i837 = data
  i836.destinationStateNameHash = i837[0]
  i836.destinationStateMachineId = i837[1]
  i836.isExit = !!i837[2]
  i836.mute = !!i837[3]
  i836.solo = !!i837[4]
  var i839 = i837[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i839[i + 0]) );
  }
  i836.conditions = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i843 = data
  i842.defaultBool = !!i843[0]
  i842.defaultFloat = i843[1]
  i842.defaultInt = i843[2]
  i842.name = i843[3]
  i842.nameHash = i843[4]
  i842.type = i843[5]
  return i842
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i845 = data
  i844.useSafeMode = !!i845[0]
  i844.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i845[1], i844.safeModeOptions)
  i844.timeScale = i845[2]
  i844.useSmoothDeltaTime = !!i845[3]
  i844.maxSmoothUnscaledTime = i845[4]
  i844.rewindCallbackMode = i845[5]
  i844.showUnityEditorReport = !!i845[6]
  i844.logBehaviour = i845[7]
  i844.drawGizmos = !!i845[8]
  i844.defaultRecyclable = !!i845[9]
  i844.defaultAutoPlay = i845[10]
  i844.defaultUpdateType = i845[11]
  i844.defaultTimeScaleIndependent = !!i845[12]
  i844.defaultEaseType = i845[13]
  i844.defaultEaseOvershootOrAmplitude = i845[14]
  i844.defaultEasePeriod = i845[15]
  i844.defaultAutoKill = !!i845[16]
  i844.defaultLoopType = i845[17]
  i844.showPreviewPanel = !!i845[18]
  i844.storeSettingsLocation = i845[19]
  i844.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i845[20], i844.modules)
  i844.showPlayingTweens = !!i845[21]
  i844.showPausedTweens = !!i845[22]
  return i844
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i846 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i847 = data
  i846.nestedTweenFailureBehaviour = i847[0]
  return i846
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i849 = data
  i848.showPanel = !!i849[0]
  i848.audioEnabled = !!i849[1]
  i848.physicsEnabled = !!i849[2]
  i848.physics2DEnabled = !!i849[3]
  i848.spriteEnabled = !!i849[4]
  i848.uiEnabled = !!i849[5]
  i848.textMeshProEnabled = !!i849[6]
  i848.tk2DEnabled = !!i849[7]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i853[i + 0]) );
  }
  i850.files = i852
  i850.componentToPrefabIds = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i857 = data
  i856.path = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'unityObject')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i861[i + 0]) );
  }
  i858.scriptsExecutionOrder = i860
  var i863 = i859[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i863[i + 0]) );
  }
  i858.sortingLayers = i862
  var i865 = i859[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i865[i + 0]) );
  }
  i858.cullingLayers = i864
  i858.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i859[3], i858.timeSettings)
  i858.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i859[4], i858.physicsSettings)
  i858.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i859[5], i858.physics2DSettings)
  i858.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i859[6], i858.qualitySettings)
  i858.enableRealtimeShadows = !!i859[7]
  i858.autoInstantiatePrefabs = !!i859[8]
  i858.enableAutoInstancing = !!i859[9]
  i858.lightmapEncodingQuality = i859[10]
  i858.desiredColorSpace = i859[11]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i869 = data
  i868.name = i869[0]
  i868.value = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  i872.value = i873[2]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i877 = data
  i876.id = i877[0]
  i876.name = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i879 = data
  i878.fixedDeltaTime = i879[0]
  i878.maximumDeltaTime = i879[1]
  i878.timeScale = i879[2]
  i878.maximumParticleTimestep = i879[3]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i881 = data
  i880.gravity = new pc.Vec3( i881[0], i881[1], i881[2] )
  i880.defaultSolverIterations = i881[3]
  i880.bounceThreshold = i881[4]
  i880.autoSyncTransforms = !!i881[5]
  i880.autoSimulation = !!i881[6]
  var i883 = i881[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'material')
  i888.gravity = new pc.Vec2( i889[2], i889[3] )
  i888.positionIterations = i889[4]
  i888.velocityIterations = i889[5]
  i888.velocityThreshold = i889[6]
  i888.maxLinearCorrection = i889[7]
  i888.maxAngularCorrection = i889[8]
  i888.maxTranslationSpeed = i889[9]
  i888.maxRotationSpeed = i889[10]
  i888.timeToSleep = i889[11]
  i888.linearSleepTolerance = i889[12]
  i888.angularSleepTolerance = i889[13]
  i888.defaultContactOffset = i889[14]
  i888.autoSimulation = !!i889[15]
  i888.queriesHitTriggers = !!i889[16]
  i888.queriesStartInColliders = !!i889[17]
  i888.callbacksOnDisable = !!i889[18]
  i888.reuseCollisionCallbacks = !!i889[19]
  i888.autoSyncTransforms = !!i889[20]
  var i891 = i889[21]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i891[i + 0]) );
  }
  i888.collisionMatrix = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i895 = data
  i894.enabled = !!i895[0]
  i894.layerId = i895[1]
  i894.otherLayerId = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i899[i + 0]) );
  }
  i896.qualityLevels = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.names = i900
  i896.shadows = i897[2]
  i896.anisotropicFiltering = i897[3]
  i896.antiAliasing = i897[4]
  i896.lodBias = i897[5]
  i896.shadowCascades = i897[6]
  i896.shadowDistance = i897[7]
  i896.shadowmaskMode = i897[8]
  i896.shadowProjection = i897[9]
  i896.shadowResolution = i897[10]
  i896.softParticles = !!i897[11]
  i896.softVegetation = !!i897[12]
  i896.activeColorSpace = i897[13]
  i896.desiredColorSpace = i897[14]
  i896.masterTextureLimit = i897[15]
  i896.maxQueuedFrames = i897[16]
  i896.particleRaycastBudget = i897[17]
  i896.pixelLightCount = i897[18]
  i896.realtimeReflectionProbes = !!i897[19]
  i896.shadowCascade2Split = i897[20]
  i896.shadowCascade4Split = new pc.Vec3( i897[21], i897[22], i897[23] )
  i896.streamingMipmapsActive = !!i897[24]
  i896.vSyncCount = i897[25]
  i896.asyncUploadBufferSize = i897[26]
  i896.asyncUploadTimeSlice = i897[27]
  i896.billboardsFaceCameraPosition = !!i897[28]
  i896.shadowNearPlaneOffset = i897[29]
  i896.streamingMipmapsMemoryBudget = i897[30]
  i896.maximumLODLevel = i897[31]
  i896.streamingMipmapsAddAllCameras = !!i897[32]
  i896.streamingMipmapsMaxLevelReduction = i897[33]
  i896.streamingMipmapsRenderersPerFrame = i897[34]
  i896.resolutionScalingFixedDPIFactor = i897[35]
  i896.streamingMipmapsMaxFileIORequests = i897[36]
  i896.currentQualityLevel = i897[37]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i907 = data
  i906.weight = i907[0]
  i906.vertices = i907[1]
  i906.normals = i907[2]
  i906.tangents = i907[3]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i911 = data
  i910.mode = i911[0]
  i910.parameter = i911[1]
  i910.threshold = i911[2]
  return i910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[38],"48":[8],"49":[18],"50":[18],"51":[18],"52":[18],"53":[18],"54":[18],"55":[18],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[8],"71":[13],"72":[73],"74":[73],"21":[20],"30":[26,20],"75":[20],"76":[26,20],"24":[21],"27":[26,20],"77":[20],"23":[21],"78":[20],"79":[20],"80":[20],"81":[20],"82":[20],"83":[20],"84":[20],"29":[20],"85":[26,20],"86":[26,20],"87":[20],"88":[20],"89":[20],"90":[20],"91":[26,20],"92":[20],"93":[31],"94":[31],"32":[31],"95":[31],"96":[8],"97":[8],"98":[20],"99":[26,20],"100":[13,12],"101":[26,20],"102":[26,20],"103":[13,12,26,20],"104":[20,26],"105":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","IECControl","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","Apartment","BrokenBuilding","Brick","UnityEngine.Rigidbody","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Scope","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Mask","CutoutMask","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.33f1";

Deserializers.productName = "GiantWantedPlayable";

Deserializers.lunaInitializationTime = "03/30/2022 03:35:59";

Deserializers.lunaDaysRunning = "257.3";

Deserializers.lunaVersion = "4.2.0";

Deserializers.lunaSHA = "d56dc2bfc365c362dac9adcf4089e5b520e71130";

Deserializers.creativeName = "PLY3-QuangNH-Luna";

Deserializers.lunaAppID = "14522";

Deserializers.projectId = "3c8c6a4f-ab91-4177-8cf8-4821d5d9b1ce";

Deserializers.packagesInfo = "com.unity.textmeshpro: 2.0.0\ncom.unity.timeline: 1.2.18\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "https://play.google.com/store/apps/details?id=com.unicorn.magic.hand";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1074";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4239";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.GiantWantedPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "3f3a1e4f-aaed-4218-b01f-50169ef758f2";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

