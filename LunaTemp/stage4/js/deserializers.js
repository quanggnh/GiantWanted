var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSpring' )
  var i571 = data
  i570.spring = i571[0]
  i570.damper = i571[1]
  i570.targetPosition = i571[2]
  return i570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointMotor' )
  var i573 = data
  i572.m_TargetVelocity = i573[0]
  i572.m_Force = i573[1]
  i572.m_FreeSpin = i573[2]
  return i572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointLimits' )
  var i575 = data
  i574.m_Min = i575[0]
  i574.m_Max = i575[1]
  i574.m_Bounciness = i575[2]
  i574.m_BounceMinVelocity = i575[3]
  i574.m_ContactDistance = i575[4]
  i574.minBounce = i575[5]
  i574.maxBounce = i575[6]
  return i574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointDrive' )
  var i577 = data
  i576.m_PositionSpring = i577[0]
  i576.m_PositionDamper = i577[1]
  i576.m_MaximumForce = i577[2]
  return i576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i579 = data
  i578.m_Spring = i579[0]
  i578.m_Damper = i579[1]
  return i578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i581 = data
  i580.m_Limit = i581[0]
  i580.m_Bounciness = i581[1]
  i580.m_ContactDistance = i581[2]
  return i580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i583 = data
  i582.m_ExtremumSlip = i583[0]
  i582.m_ExtremumValue = i583[1]
  i582.m_AsymptoteSlip = i583[2]
  i582.m_AsymptoteValue = i583[3]
  i582.m_Stiffness = i583[4]
  return i582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i585 = data
  i584.m_LowerAngle = i585[0]
  i584.m_UpperAngle = i585[1]
  return i584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i587 = data
  i586.m_MotorSpeed = i587[0]
  i586.m_MaximumMotorTorque = i587[1]
  return i586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i589 = data
  i588.m_DampingRatio = i589[0]
  i588.m_Frequency = i589[1]
  i588.m_Angle = i589[2]
  return i588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i591 = data
  i590.m_LowerTranslation = i591[0]
  i590.m_UpperTranslation = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i592 = root || new pc.UnityMaterial()
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'shader')
  i592.renderQueue = i593[3]
  i592.enableInstancing = !!i593[4]
  var i595 = i593[5]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i595[i + 0]) );
  }
  i592.floatParameters = i594
  var i597 = i593[6]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i597[i + 0]) );
  }
  i592.colorParameters = i596
  var i599 = i593[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i599[i + 0]) );
  }
  i592.vectorParameters = i598
  var i601 = i593[8]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i601[i + 0]) );
  }
  i592.textureParameters = i600
  var i603 = i593[9]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i603[i + 0]) );
  }
  i592.materialFlags = i602
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = new pc.Color(i611[1], i611[2], i611[3], i611[4])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Vec4( i615[1], i615[2], i615[3], i615[4] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'value')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i623 = data
  i622.name = i623[0]
  i622.enabled = !!i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i625 = data
  i624.position = new pc.Vec3( i625[0], i625[1], i625[2] )
  i624.scale = new pc.Vec3( i625[3], i625[4], i625[5] )
  i624.rotation = new pc.Quat(i625[6], i625[7], i625[8], i625[9])
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'sharedMesh')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'additionalVertexStreams')
  i628.enabled = !!i629[2]
  request.r(i629[3], i629[4], 0, i628, 'sharedMaterial')
  var i631 = i629[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.sharedMaterials = i630
  i628.receiveShadows = !!i629[6]
  i628.shadowCastingMode = i629[7]
  i628.sortingLayerID = i629[8]
  i628.sortingOrder = i629[9]
  i628.lightmapIndex = i629[10]
  i628.lightmapSceneIndex = i629[11]
  i628.lightmapScaleOffset = new pc.Vec4( i629[12], i629[13], i629[14], i629[15] )
  i628.lightProbeUsage = i629[16]
  i628.reflectionProbeUsage = i629[17]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i635 = data
  i634.enabled = !!i635[0]
  i634.isTrigger = !!i635[1]
  request.r(i635[2], i635[3], 0, i634, 'material')
  request.r(i635[4], i635[5], 0, i634, 'sharedMesh')
  i634.convex = !!i635[6]
  return i634
}

Deserializers["Apartment"] = function (request, data, root) {
  var i636 = root || request.c( 'Apartment' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'buildCam')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i639 = data
  i638.name = i639[0]
  i638.tag = i639[1]
  i638.enabled = !!i639[2]
  i638.isStatic = !!i639[3]
  i638.layer = i639[4]
  return i638
}

Deserializers["BrokenBuilding"] = function (request, data, root) {
  var i640 = root || request.c( 'BrokenBuilding' )
  var i641 = data
  i640.IsBreakAll = !!i641[0]
  var i643 = i641[1]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 1, i642, '')
  }
  i640.brickList1 = i642
  var i645 = i641[2]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 1, i644, '')
  }
  i640.brickList2 = i644
  var i647 = i641[3]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 1, i646, '')
  }
  i640.brickList3 = i646
  var i649 = i641[4]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i640.brickList4 = i648
  var i651 = i641[5]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i640.brickList5 = i650
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i655 = data
  i654.mass = i655[0]
  i654.drag = i655[1]
  i654.angularDrag = i655[2]
  i654.useGravity = !!i655[3]
  i654.isKinematic = !!i655[4]
  i654.constraints = i655[5]
  i654.maxAngularVelocity = i655[6]
  i654.collisionDetectionMode = i655[7]
  i654.interpolation = i655[8]
  return i654
}

Deserializers["Brick"] = function (request, data, root) {
  var i656 = root || request.c( 'Brick' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'BrickRigid')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i659 = data
  i658.name = i659[0]
  i658.halfPrecision = !!i659[1]
  i658.vertexCount = i659[2]
  i658.aabb = i659[3]
  var i661 = i659[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( !!i661[i + 0] );
  }
  i658.streams = i660
  i658.vertices = i659[5]
  var i663 = i659[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i663[i + 0]) );
  }
  i658.subMeshes = i662
  var i665 = i659[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 16) {
    i664.push( new pc.Mat4().setData(i665[i + 0], i665[i + 1], i665[i + 2], i665[i + 3],  i665[i + 4], i665[i + 5], i665[i + 6], i665[i + 7],  i665[i + 8], i665[i + 9], i665[i + 10], i665[i + 11],  i665[i + 12], i665[i + 13], i665[i + 14], i665[i + 15]) );
  }
  i658.bindposes = i664
  var i667 = i659[8]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i667[i + 0]) );
  }
  i658.blendShapes = i666
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i673 = data
  i672.triangles = i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i679 = data
  i678.name = i679[0]
  var i681 = i679[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i681[i + 0]) );
  }
  i678.frames = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i683 = data
  i682.name = i683[0]
  i682.width = i683[1]
  i682.height = i683[2]
  i682.mipmapCount = i683[3]
  i682.anisoLevel = i683[4]
  i682.filterMode = i683[5]
  i682.hdr = !!i683[6]
  i682.format = i683[7]
  i682.wrapMode = i683[8]
  i682.alphaIsTransparency = !!i683[9]
  i682.alphaSource = i683[10]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i685 = data
  i684.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i685[0], i684.main)
  i684.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i685[1], i684.colorBySpeed)
  i684.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i685[2], i684.colorOverLifetime)
  i684.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i685[3], i684.emission)
  i684.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i685[4], i684.rotationBySpeed)
  i684.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i685[5], i684.rotationOverLifetime)
  i684.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i685[6], i684.shape)
  i684.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i685[7], i684.sizeBySpeed)
  i684.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i685[8], i684.sizeOverLifetime)
  i684.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i685[9], i684.textureSheetAnimation)
  i684.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i685[10], i684.velocityOverLifetime)
  i684.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i685[11], i684.noise)
  i684.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i685[12], i684.inheritVelocity)
  i684.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i685[13], i684.forceOverLifetime)
  i684.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i685[14], i684.limitVelocityOverLifetime)
  i684.useAutoRandomSeed = !!i685[15]
  i684.randomSeed = i685[16]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemMain()
  var i687 = data
  i686.duration = i687[0]
  i686.loop = !!i687[1]
  i686.prewarm = !!i687[2]
  i686.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.startDelay)
  i686.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.startLifetime)
  i686.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[5], i686.startSpeed)
  i686.startSize3D = !!i687[6]
  i686.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[7], i686.startSizeX)
  i686.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.startSizeY)
  i686.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.startSizeZ)
  i686.startRotation3D = !!i687[10]
  i686.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.startRotationX)
  i686.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[12], i686.startRotationY)
  i686.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[13], i686.startRotationZ)
  i686.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i687[14], i686.startColor)
  i686.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.gravityModifier)
  i686.simulationSpace = i687[16]
  request.r(i687[17], i687[18], 0, i686, 'customSimulationSpace')
  i686.simulationSpeed = i687[19]
  i686.useUnscaledTime = !!i687[20]
  i686.scalingMode = i687[21]
  i686.playOnAwake = !!i687[22]
  i686.maxParticles = i687[23]
  i686.emitterVelocityMode = i687[24]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i688 = root || new pc.MinMaxCurve()
  var i689 = data
  i688.mode = i689[0]
  i688.curveMin = new pc.AnimationCurve( { keys_flow: i689[1] } )
  i688.curveMax = new pc.AnimationCurve( { keys_flow: i689[2] } )
  i688.curveMultiplier = i689[3]
  i688.constantMin = i689[4]
  i688.constantMax = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i690 = root || new pc.MinMaxGradient()
  var i691 = data
  i690.mode = i691[0]
  i690.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i691[1], i690.gradientMin)
  i690.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i691[2], i690.gradientMax)
  i690.colorMin = new pc.Color(i691[3], i691[4], i691[5], i691[6])
  i690.colorMax = new pc.Color(i691[7], i691[8], i691[9], i691[10])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i693 = data
  i692.mode = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i695[i + 0]) );
  }
  i692.colorKeys = i694
  var i697 = i693[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i697[i + 0]) );
  }
  i692.alphaKeys = i696
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemColorBySpeed()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i699[1], i698.color)
  i698.range = new pc.Vec2( i699[2], i699[3] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i703 = data
  i702.color = new pc.Color(i703[0], i703[1], i703[2], i703[3])
  i702.time = i703[4]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i707 = data
  i706.alpha = i707[0]
  i706.time = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemColorOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i709[1], i708.color)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemEmitter()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.rateOverTime)
  i710.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.rateOverDistance)
  var i713 = i711[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i713[i + 0]) );
  }
  i710.bursts = i712
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemBurst()
  var i717 = data
  i716.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[0], i716.count)
  i716.cycleCount = i717[1]
  i716.minCount = i717[2]
  i716.maxCount = i717[3]
  i716.repeatInterval = i717[4]
  i716.time = i717[5]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemRotationBySpeed()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[1], i718.x)
  i718.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.y)
  i718.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.z)
  i718.separateAxes = !!i719[4]
  i718.range = new pc.Vec2( i719[5], i719[6] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemRotationOverLifetime()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[1], i720.x)
  i720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[2], i720.y)
  i720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[3], i720.z)
  i720.separateAxes = !!i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemShape()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.shapeType = i723[1]
  i722.randomDirectionAmount = i723[2]
  i722.sphericalDirectionAmount = i723[3]
  i722.randomPositionAmount = i723[4]
  i722.alignToDirection = !!i723[5]
  i722.radius = i723[6]
  i722.radiusMode = i723[7]
  i722.radiusSpread = i723[8]
  i722.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[9], i722.radiusSpeed)
  i722.radiusThickness = i723[10]
  i722.angle = i723[11]
  i722.length = i723[12]
  i722.boxThickness = new pc.Vec3( i723[13], i723[14], i723[15] )
  i722.meshShapeType = i723[16]
  request.r(i723[17], i723[18], 0, i722, 'mesh')
  request.r(i723[19], i723[20], 0, i722, 'meshRenderer')
  request.r(i723[21], i723[22], 0, i722, 'skinnedMeshRenderer')
  i722.useMeshMaterialIndex = !!i723[23]
  i722.meshMaterialIndex = i723[24]
  i722.useMeshColors = !!i723[25]
  i722.normalOffset = i723[26]
  i722.arc = i723[27]
  i722.arcMode = i723[28]
  i722.arcSpread = i723[29]
  i722.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[30], i722.arcSpeed)
  i722.donutRadius = i723[31]
  i722.position = new pc.Vec3( i723[32], i723[33], i723[34] )
  i722.rotation = new pc.Vec3( i723[35], i723[36], i723[37] )
  i722.scale = new pc.Vec3( i723[38], i723[39], i723[40] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemSizeBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.separateAxes = !!i725[4]
  i724.range = new pc.Vec2( i725[5], i725[6] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemSizeOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[1], i726.x)
  i726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.y)
  i726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.z)
  i726.separateAxes = !!i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.mode = i729[1]
  i728.animation = i729[2]
  i728.numTilesX = i729[3]
  i728.numTilesY = i729[4]
  i728.useRandomRow = !!i729[5]
  i728.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[6], i728.frameOverTime)
  i728.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[7], i728.startFrame)
  i728.cycleCount = i729[8]
  i728.rowIndex = i729[9]
  i728.flipU = i729[10]
  i728.flipV = i729[11]
  i728.spriteCount = i729[12]
  var i731 = i729[13]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.sprites = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[1], i734.x)
  i734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.y)
  i734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.z)
  i734.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.speedModifier)
  i734.space = i735[5]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemNoise()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.separateAxes = !!i737[1]
  i736.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.strengthX)
  i736.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[3], i736.strengthY)
  i736.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[4], i736.strengthZ)
  i736.frequency = i737[5]
  i736.damping = !!i737[6]
  i736.octaveCount = i737[7]
  i736.octaveMultiplier = i737[8]
  i736.octaveScale = i737[9]
  i736.quality = i737[10]
  i736.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[11], i736.scrollSpeed)
  i736.scrollSpeedMultiplier = i737[12]
  i736.remapEnabled = !!i737[13]
  i736.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[14], i736.remapX)
  i736.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[15], i736.remapY)
  i736.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[16], i736.remapZ)
  i736.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[17], i736.positionAmount)
  i736.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[18], i736.rotationAmount)
  i736.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[19], i736.sizeAmount)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemInheritVelocity()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.mode = i739[1]
  i738.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.curve)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemForceOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.x)
  i740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.y)
  i740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.z)
  i740.space = i741[4]
  i740.randomized = !!i741[5]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.limitX)
  i742.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.limitY)
  i742.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.limitZ)
  i742.dampen = i743[4]
  i742.separateAxes = !!i743[5]
  i742.space = i743[6]
  i742.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[7], i742.drag)
  i742.multiplyDragByParticleSize = !!i743[8]
  i742.multiplyDragByParticleVelocity = !!i743[9]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i745 = data
  i744.enabled = !!i745[0]
  request.r(i745[1], i745[2], 0, i744, 'sharedMaterial')
  var i747 = i745[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.sharedMaterials = i746
  i744.receiveShadows = !!i745[4]
  i744.shadowCastingMode = i745[5]
  i744.sortingLayerID = i745[6]
  i744.sortingOrder = i745[7]
  i744.lightmapIndex = i745[8]
  i744.lightmapSceneIndex = i745[9]
  i744.lightmapScaleOffset = new pc.Vec4( i745[10], i745[11], i745[12], i745[13] )
  i744.lightProbeUsage = i745[14]
  i744.reflectionProbeUsage = i745[15]
  request.r(i745[16], i745[17], 0, i744, 'mesh')
  i744.meshCount = i745[18]
  i744.activeVertexStreamsCount = i745[19]
  i744.alignment = i745[20]
  i744.renderMode = i745[21]
  i744.sortMode = i745[22]
  i744.lengthScale = i745[23]
  i744.velocityScale = i745[24]
  i744.cameraVelocityScale = i745[25]
  i744.normalDirection = i745[26]
  i744.sortingFudge = i745[27]
  i744.minParticleSize = i745[28]
  i744.maxParticleSize = i745[29]
  i744.pivot = new pc.Vec3( i745[30], i745[31], i745[32] )
  request.r(i745[33], i745[34], 0, i744, 'trailMaterial')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i749 = data
  i748.center = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.radius = i749[3]
  i748.height = i749[4]
  i748.direction = i749[5]
  i748.enabled = !!i749[6]
  i748.isTrigger = !!i749[7]
  request.r(i749[8], i749[9], 0, i748, 'material')
  return i748
}

Deserializers["NormalBullet"] = function (request, data, root) {
  var i750 = root || request.c( 'NormalBullet' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'bloodFx')
  request.r(i751[2], i751[3], 0, i750, 'exploreFx')
  request.r(i751[4], i751[5], 0, i750, 'BulletRigid')
  i750.DamageForce = i751[6]
  i750.Damage = i751[7]
  request.r(i751[8], i751[9], 0, i750, 'bulletList')
  request.r(i751[10], i751[11], 0, i750, 'cameraMain')
  return i750
}

Deserializers["BulletRotation"] = function (request, data, root) {
  var i752 = root || request.c( 'BulletRotation' )
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i755 = data
  i754.enabled = !!i755[0]
  i754.aspect = i755[1]
  i754.orthographic = !!i755[2]
  i754.orthographicSize = i755[3]
  i754.backgroundColor = new pc.Color(i755[4], i755[5], i755[6], i755[7])
  i754.nearClipPlane = i755[8]
  i754.farClipPlane = i755[9]
  i754.fieldOfView = i755[10]
  i754.depth = i755[11]
  i754.clearFlags = i755[12]
  i754.cullingMask = i755[13]
  i754.rect = i755[14]
  request.r(i755[15], i755[16], 0, i754, 'targetTexture')
  return i754
}

Deserializers["BulletCameraController"] = function (request, data, root) {
  var i756 = root || request.c( 'BulletCameraController' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'bulletCam')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i759 = data
  i758.enabled = !!i759[0]
  request.r(i759[1], i759[2], 0, i758, 'sharedMaterial')
  var i761 = i759[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.sharedMaterials = i760
  i758.receiveShadows = !!i759[4]
  i758.shadowCastingMode = i759[5]
  i758.sortingLayerID = i759[6]
  i758.sortingOrder = i759[7]
  i758.lightmapIndex = i759[8]
  i758.lightmapSceneIndex = i759[9]
  i758.lightmapScaleOffset = new pc.Vec4( i759[10], i759[11], i759[12], i759[13] )
  i758.lightProbeUsage = i759[14]
  i758.reflectionProbeUsage = i759[15]
  var i763 = i759[16]
  var i762 = []
  for(var i = 0; i < i763.length; i += 3) {
    i762.push( new pc.Vec3( i763[i + 0], i763[i + 1], i763[i + 2] ) );
  }
  i758.positions = i762
  i758.positionCount = i759[17]
  i758.time = i759[18]
  i758.startWidth = i759[19]
  i758.endWidth = i759[20]
  i758.widthMultiplier = i759[21]
  i758.autodestruct = !!i759[22]
  i758.emitting = !!i759[23]
  i758.numCornerVertices = i759[24]
  i758.numCapVertices = i759[25]
  i758.minVertexDistance = i759[26]
  i758.colorGradient = i759[27] ? new pc.ColorGradient(i759[27][0], i759[27][1], i759[27][2]) : null
  i758.startColor = new pc.Color(i759[28], i759[29], i759[30], i759[31])
  i758.endColor = new pc.Color(i759[32], i759[33], i759[34], i759[35])
  i758.generateLightingData = !!i759[36]
  i758.textureMode = i759[37]
  i758.alignment = i759[38]
  i758.widthCurve = new pc.AnimationCurve( { keys_flow: i759[39] } )
  return i758
}

Deserializers["AutoDestructor"] = function (request, data, root) {
  var i766 = root || request.c( 'AutoDestructor' )
  var i767 = data
  i766.timeDestroy = i767[0]
  i766.isPutToPool = !!i767[1]
  i766.typeDestroy = i767[2]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i769 = data
  i768.pivot = new pc.Vec2( i769[0], i769[1] )
  i768.anchorMin = new pc.Vec2( i769[2], i769[3] )
  i768.anchorMax = new pc.Vec2( i769[4], i769[5] )
  i768.sizeDelta = new pc.Vec2( i769[6], i769[7] )
  i768.anchoredPosition3D = new pc.Vec3( i769[8], i769[9], i769[10] )
  i768.rotation = new pc.Quat(i769[11], i769[12], i769[13], i769[14])
  i768.scale = new pc.Vec3( i769[15], i769[16], i769[17] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i771 = data
  i770.cullTransparentMesh = !!i771[0]
  return i770
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TextMeshPro' )
  var i773 = data
  i772.m_hasFontAssetChanged = !!i773[0]
  request.r(i773[1], i773[2], 0, i772, 'm_renderer')
  i772.m_maskType = i773[3]
  i772._SortingLayer = i773[4]
  i772._SortingLayerID = i773[5]
  i772._SortingOrder = i773[6]
  i772.m_text = i773[7]
  i772.m_isRightToLeft = !!i773[8]
  request.r(i773[9], i773[10], 0, i772, 'm_fontAsset')
  request.r(i773[11], i773[12], 0, i772, 'm_sharedMaterial')
  var i775 = i773[13]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.m_fontSharedMaterials = i774
  request.r(i773[14], i773[15], 0, i772, 'm_fontMaterial')
  var i777 = i773[16]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.m_fontMaterials = i776
  i772.m_fontColor32 = UnityEngine.Color32.ConstructColor(i773[17], i773[18], i773[19], i773[20])
  i772.m_fontColor = new pc.Color(i773[21], i773[22], i773[23], i773[24])
  i772.m_enableVertexGradient = !!i773[25]
  i772.m_colorMode = i773[26]
  i772.m_fontColorGradient = request.d('TMPro.VertexGradient', i773[27], i772.m_fontColorGradient)
  request.r(i773[28], i773[29], 0, i772, 'm_fontColorGradientPreset')
  request.r(i773[30], i773[31], 0, i772, 'm_spriteAsset')
  i772.m_tintAllSprites = !!i773[32]
  request.r(i773[33], i773[34], 0, i772, 'm_StyleSheet')
  i772.m_TextStyleHashCode = i773[35]
  i772.m_overrideHtmlColors = !!i773[36]
  i772.m_faceColor = UnityEngine.Color32.ConstructColor(i773[37], i773[38], i773[39], i773[40])
  i772.m_fontSize = i773[41]
  i772.m_fontSizeBase = i773[42]
  i772.m_fontWeight = i773[43]
  i772.m_enableAutoSizing = !!i773[44]
  i772.m_fontSizeMin = i773[45]
  i772.m_fontSizeMax = i773[46]
  i772.m_fontStyle = i773[47]
  i772.m_HorizontalAlignment = i773[48]
  i772.m_VerticalAlignment = i773[49]
  i772.m_textAlignment = i773[50]
  i772.m_characterSpacing = i773[51]
  i772.m_wordSpacing = i773[52]
  i772.m_lineSpacing = i773[53]
  i772.m_lineSpacingMax = i773[54]
  i772.m_paragraphSpacing = i773[55]
  i772.m_charWidthMaxAdj = i773[56]
  i772.m_enableWordWrapping = !!i773[57]
  i772.m_wordWrappingRatios = i773[58]
  i772.m_overflowMode = i773[59]
  request.r(i773[60], i773[61], 0, i772, 'm_linkedTextComponent')
  request.r(i773[62], i773[63], 0, i772, 'parentLinkedComponent')
  i772.m_enableKerning = !!i773[64]
  i772.m_enableExtraPadding = !!i773[65]
  i772.checkPaddingRequired = !!i773[66]
  i772.m_isRichText = !!i773[67]
  i772.m_parseCtrlCharacters = !!i773[68]
  i772.m_isOrthographic = !!i773[69]
  i772.m_isCullingEnabled = !!i773[70]
  i772.m_horizontalMapping = i773[71]
  i772.m_verticalMapping = i773[72]
  i772.m_uvLineOffset = i773[73]
  i772.m_geometrySortingOrder = i773[74]
  i772.m_IsTextObjectScaleStatic = !!i773[75]
  i772.m_VertexBufferAutoSizeReduction = !!i773[76]
  i772.m_useMaxVisibleDescender = !!i773[77]
  i772.m_pageToDisplay = i773[78]
  i772.m_margin = new pc.Vec4( i773[79], i773[80], i773[81], i773[82] )
  i772.m_isUsingLegacyAnimationComponent = !!i773[83]
  i772.m_isVolumetricText = !!i773[84]
  request.r(i773[85], i773[86], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[87]
  i772.m_Color = new pc.Color(i773[88], i773[89], i773[90], i773[91])
  i772.m_RaycastTarget = !!i773[92]
  return i772
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.VertexGradient' )
  var i779 = data
  i778.topLeft = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.topRight = new pc.Color(i779[4], i779[5], i779[6], i779[7])
  i778.bottomLeft = new pc.Color(i779[8], i779[9], i779[10], i779[11])
  i778.bottomRight = new pc.Color(i779[12], i779[13], i779[14], i779[15])
  return i778
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i781 = data
  i780.hashCode = i781[0]
  request.r(i781[1], i781[2], 0, i780, 'material')
  i780.materialHashCode = i781[3]
  request.r(i781[4], i781[5], 0, i780, 'atlas')
  i780.normalStyle = i781[6]
  i780.normalSpacingOffset = i781[7]
  i780.boldStyle = i781[8]
  i780.boldSpacing = i781[9]
  i780.italicStyle = i781[10]
  i780.tabSize = i781[11]
  i780.m_Version = i781[12]
  i780.m_SourceFontFileGUID = i781[13]
  request.r(i781[14], i781[15], 0, i780, 'm_SourceFontFile_EditorRef')
  request.r(i781[16], i781[17], 0, i780, 'm_SourceFontFile')
  i780.m_AtlasPopulationMode = i781[18]
  i780.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i781[19], i780.m_FaceInfo)
  var i783 = i781[20]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('UnityEngine.TextCore.Glyph', i783[i + 0]));
  }
  i780.m_GlyphTable = i782
  var i785 = i781[21]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('TMPro.TMP_Character', i785[i + 0]));
  }
  i780.m_CharacterTable = i784
  var i787 = i781[22]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i780.m_AtlasTextures = i786
  i780.m_AtlasTextureIndex = i781[23]
  i780.m_IsMultiAtlasTexturesEnabled = !!i781[24]
  i780.m_ClearDynamicDataOnBuild = !!i781[25]
  var i789 = i781[26]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.TextCore.GlyphRect', i789[i + 0]));
  }
  i780.m_UsedGlyphRects = i788
  var i791 = i781[27]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('UnityEngine.TextCore.GlyphRect', i791[i + 0]));
  }
  i780.m_FreeGlyphRects = i790
  i780.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i781[28], i780.m_fontInfo)
  i780.m_AtlasWidth = i781[29]
  i780.m_AtlasHeight = i781[30]
  i780.m_AtlasPadding = i781[31]
  i780.m_AtlasRenderMode = i781[32]
  var i793 = i781[33]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('TMPro.TMP_Glyph', i793[i + 0]));
  }
  i780.m_glyphInfoList = i792
  i780.m_KerningTable = request.d('TMPro.KerningTable', i781[34], i780.m_KerningTable)
  i780.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i781[35], i780.m_FontFeatureTable)
  var i795 = i781[36]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i780.fallbackFontAssets = i794
  var i797 = i781[37]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 1, i796, '')
  }
  i780.m_FallbackFontAssetTable = i796
  i780.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i781[38], i780.m_CreationSettings)
  var i799 = i781[39]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('TMPro.TMP_FontWeightPair', i799[i + 0]) );
  }
  i780.m_FontWeightTable = i798
  var i801 = i781[40]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('TMPro.TMP_FontWeightPair', i801[i + 0]) );
  }
  i780.fontWeights = i800
  return i780
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i803 = data
  i802.m_FaceIndex = i803[0]
  i802.m_FamilyName = i803[1]
  i802.m_StyleName = i803[2]
  i802.m_PointSize = i803[3]
  i802.m_Scale = i803[4]
  i802.m_LineHeight = i803[5]
  i802.m_AscentLine = i803[6]
  i802.m_CapLine = i803[7]
  i802.m_MeanLine = i803[8]
  i802.m_Baseline = i803[9]
  i802.m_DescentLine = i803[10]
  i802.m_SuperscriptOffset = i803[11]
  i802.m_SuperscriptSize = i803[12]
  i802.m_SubscriptOffset = i803[13]
  i802.m_SubscriptSize = i803[14]
  i802.m_UnderlineOffset = i803[15]
  i802.m_UnderlineThickness = i803[16]
  i802.m_StrikethroughOffset = i803[17]
  i802.m_StrikethroughThickness = i803[18]
  i802.m_TabWidth = i803[19]
  return i802
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i807 = data
  i806.m_Index = i807[0]
  i806.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i807[1], i806.m_Metrics)
  i806.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i807[2], i806.m_GlyphRect)
  i806.m_Scale = i807[3]
  i806.m_AtlasIndex = i807[4]
  return i806
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i809 = data
  i808.m_Width = i809[0]
  i808.m_Height = i809[1]
  i808.m_HorizontalBearingX = i809[2]
  i808.m_HorizontalBearingY = i809[3]
  i808.m_HorizontalAdvance = i809[4]
  return i808
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i811 = data
  i810.m_X = i811[0]
  i810.m_Y = i811[1]
  i810.m_Width = i811[2]
  i810.m_Height = i811[3]
  return i810
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_Character' )
  var i815 = data
  i814.m_ElementType = i815[0]
  i814.m_Unicode = i815[1]
  i814.m_GlyphIndex = i815[2]
  i814.m_Scale = i815[3]
  return i814
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i821 = data
  i820.Name = i821[0]
  i820.PointSize = i821[1]
  i820.Scale = i821[2]
  i820.CharacterCount = i821[3]
  i820.LineHeight = i821[4]
  i820.Baseline = i821[5]
  i820.Ascender = i821[6]
  i820.CapHeight = i821[7]
  i820.Descender = i821[8]
  i820.CenterLine = i821[9]
  i820.SuperscriptOffset = i821[10]
  i820.SubscriptOffset = i821[11]
  i820.SubSize = i821[12]
  i820.Underline = i821[13]
  i820.UnderlineThickness = i821[14]
  i820.strikethrough = i821[15]
  i820.strikethroughThickness = i821[16]
  i820.TabWidth = i821[17]
  i820.Padding = i821[18]
  i820.AtlasWidth = i821[19]
  i820.AtlasHeight = i821[20]
  return i820
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_Glyph' )
  var i825 = data
  i824.id = i825[0]
  i824.x = i825[1]
  i824.y = i825[2]
  i824.width = i825[3]
  i824.height = i825[4]
  i824.xOffset = i825[5]
  i824.yOffset = i825[6]
  i824.xAdvance = i825[7]
  i824.scale = i825[8]
  return i824
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.KerningTable' )
  var i827 = data
  var i829 = i827[0]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(request.d('TMPro.KerningPair', i829[i + 0]));
  }
  i826.kerningPairs = i828
  return i826
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.KerningPair' )
  var i833 = data
  i832.xOffset = i833[0]
  i832.m_FirstGlyph = i833[1]
  i832.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i833[2], i832.m_FirstGlyphAdjustments)
  i832.m_SecondGlyph = i833[3]
  i832.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i833[4], i832.m_SecondGlyphAdjustments)
  i832.m_IgnoreSpacingAdjustments = !!i833[5]
  return i832
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i835 = data
  var i837 = i835[0]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i837[i + 0]));
  }
  i834.m_GlyphPairAdjustmentRecords = i836
  return i834
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i841 = data
  i840.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i841[0], i840.m_FirstAdjustmentRecord)
  i840.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i841[1], i840.m_SecondAdjustmentRecord)
  i840.m_FeatureLookupFlags = i841[2]
  return i840
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i843 = data
  i842.m_GlyphIndex = i843[0]
  i842.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i843[1], i842.m_GlyphValueRecord)
  return i842
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i845 = data
  i844.m_XPlacement = i845[0]
  i844.m_YPlacement = i845[1]
  i844.m_XAdvance = i845[2]
  i844.m_YAdvance = i845[3]
  return i844
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i849 = data
  i848.sourceFontFileName = i849[0]
  i848.sourceFontFileGUID = i849[1]
  i848.pointSizeSamplingMode = i849[2]
  i848.pointSize = i849[3]
  i848.padding = i849[4]
  i848.packingMode = i849[5]
  i848.atlasWidth = i849[6]
  i848.atlasHeight = i849[7]
  i848.characterSetSelectionMode = i849[8]
  i848.characterSequence = i849[9]
  i848.referencedFontAssetGUID = i849[10]
  i848.referencedTextAssetGUID = i849[11]
  i848.fontStyle = i849[12]
  i848.fontStyleModifier = i849[13]
  i848.renderMode = i849[14]
  i848.includeFontFeatures = !!i849[15]
  return i848
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'regularTypeface')
  request.r(i853[2], i853[3], 0, i852, 'italicTypeface')
  return i852
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i854 = root || request.c( 'AutoDestroy' )
  var i855 = data
  i854.timeOut = i855[0]
  i854.typeDestroy = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i857 = data
  i856.enabled = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'sharedMaterial')
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[4]
  i856.shadowCastingMode = i857[5]
  i856.sortingLayerID = i857[6]
  i856.sortingOrder = i857[7]
  i856.lightmapIndex = i857[8]
  i856.lightmapSceneIndex = i857[9]
  i856.lightmapScaleOffset = new pc.Vec4( i857[10], i857[11], i857[12], i857[13] )
  i856.lightProbeUsage = i857[14]
  i856.reflectionProbeUsage = i857[15]
  request.r(i857[16], i857[17], 0, i856, 'sharedMesh')
  var i861 = i857[18]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.bones = i860
  i856.updateWhenOffscreen = !!i857[19]
  i856.localBounds = i857[20]
  request.r(i857[21], i857[22], 0, i856, 'rootBone')
  var i863 = i857[23]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i863[i + 0]) );
  }
  i856.blendShapesWeights = i862
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i869 = data
  i868.weight = i869[0]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i871 = data
  i870.center = new pc.Vec3( i871[0], i871[1], i871[2] )
  i870.size = new pc.Vec3( i871[3], i871[4], i871[5] )
  i870.enabled = !!i871[6]
  i870.isTrigger = !!i871[7]
  request.r(i871[8], i871[9], 0, i870, 'material')
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animatorController')
  i872.updateMode = i873[2]
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.humanBones = i874
  i872.enabled = !!i873[4]
  return i872
}

Deserializers["EnemyScript"] = function (request, data, root) {
  var i876 = root || request.c( 'EnemyScript' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'bloodfx')
  request.r(i877[2], i877[3], 0, i876, '_anim')
  i876.destination = new pc.Vec3( i877[4], i877[5], i877[6] )
  request.r(i877[7], i877[8], 0, i876, '_rigid')
  request.r(i877[9], i877[10], 0, i876, 'maincollider')
  i876.impact = i877[11]
  var i879 = i877[12]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i876.RagDollParts = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i883 = data
  i882.angularXDrive = request.d('UnityEngine.JointDrive', i883[0], i882.angularXDrive)
  i882.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i883[1], i882.angularXLimitSpring)
  i882.angularXMotion = i883[2]
  i882.angularYLimit = request.d('UnityEngine.SoftJointLimit', i883[3], i882.angularYLimit)
  i882.angularYMotion = i883[4]
  i882.angularYZDrive = request.d('UnityEngine.JointDrive', i883[5], i882.angularYZDrive)
  i882.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i883[6], i882.angularYZLimitSpring)
  i882.angularZLimit = request.d('UnityEngine.SoftJointLimit', i883[7], i882.angularZLimit)
  i882.angularZMotion = i883[8]
  i882.configuredInWorldSpace = !!i883[9]
  i882.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i883[10], i882.highAngularXLimit)
  i882.linearLimit = request.d('UnityEngine.SoftJointLimit', i883[11], i882.linearLimit)
  i882.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i883[12], i882.linearLimitSpring)
  i882.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i883[13], i882.lowAngularXLimit)
  i882.rotationDriveMode = i883[14]
  i882.secondaryAxis = new pc.Vec3( i883[15], i883[16], i883[17] )
  i882.slerpDrive = request.d('UnityEngine.JointDrive', i883[18], i882.slerpDrive)
  i882.swapBodies = !!i883[19]
  i882.targetAngularVelocity = new pc.Vec3( i883[20], i883[21], i883[22] )
  i882.targetPosition = new pc.Vec3( i883[23], i883[24], i883[25] )
  i882.targetRotation = new pc.Quat(i883[26], i883[27], i883[28], i883[29])
  i882.targetVelocity = new pc.Vec3( i883[30], i883[31], i883[32] )
  i882.xDrive = request.d('UnityEngine.JointDrive', i883[33], i882.xDrive)
  i882.xMotion = i883[34]
  i882.yDrive = request.d('UnityEngine.JointDrive', i883[35], i882.yDrive)
  i882.yMotion = i883[36]
  i882.zDrive = request.d('UnityEngine.JointDrive', i883[37], i882.zDrive)
  i882.zMotion = i883[38]
  request.r(i883[39], i883[40], 0, i882, 'connectedBody')
  i882.axis = new pc.Vec3( i883[41], i883[42], i883[43] )
  i882.anchor = new pc.Vec3( i883[44], i883[45], i883[46] )
  i882.connectedAnchor = new pc.Vec3( i883[47], i883[48], i883[49] )
  i882.autoConfigureConnectedAnchor = !!i883[50]
  i882.massScale = i883[51]
  i882.connectedMassScale = i883[52]
  i882.enableCollision = !!i883[53]
  i882.breakForce = i883[54]
  i882.breakTorque = i883[55]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i885 = data
  i884.name = i885[0]
  i884.atlasId = i885[1]
  i884.mipmapCount = i885[2]
  i884.hdr = !!i885[3]
  i884.size = i885[4]
  i884.anisoLevel = i885[5]
  i884.filterMode = i885[6]
  i884.wrapMode = i885[7]
  var i887 = i885[8]
  var i886 = []
  for(var i = 0; i < i887.length; i += 4) {
    i886.push( UnityEngine.Rect.MinMaxRect(i887[i + 0], i887[i + 1], i887[i + 2], i887[i + 3]) );
  }
  i884.rects = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i891 = data
  i890.name = i891[0]
  i890.index = i891[1]
  i890.startup = !!i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i893 = data
  i892.enabled = !!i893[0]
  i892.type = i893[1]
  i892.color = new pc.Color(i893[2], i893[3], i893[4], i893[5])
  i892.cullingMask = i893[6]
  i892.intensity = i893[7]
  i892.range = i893[8]
  i892.spotAngle = i893[9]
  i892.shadows = i893[10]
  i892.shadowNormalBias = i893[11]
  i892.shadowBias = i893[12]
  i892.shadowStrength = i893[13]
  i892.lightmapBakeType = i893[14]
  i892.renderMode = i893[15]
  request.r(i893[16], i893[17], 0, i892, 'cookie')
  i892.cookieSize = i893[18]
  return i892
}

Deserializers["NormalGun"] = function (request, data, root) {
  var i894 = root || request.c( 'NormalGun' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'fireFx')
  request.r(i895[2], i895[3], 0, i894, 'bullet')
  request.r(i895[4], i895[5], 0, i894, 'bulletObj')
  i894.IsEnemy = !!i895[6]
  i894.shootForce = i895[7]
  request.r(i895[8], i895[9], 0, i894, 'x2Pref')
  i894.loadBulletPos = new pc.Vec3( i895[10], i895[11], i895[12] )
  i894.loadBulletRot = new pc.Vec3( i895[13], i895[14], i895[15] )
  request.r(i895[16], i895[17], 0, i894, 'fireFxTrans')
  request.r(i895[18], i895[19], 0, i894, 'main')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.planeDistance = i897[1]
  i896.referencePixelsPerUnit = i897[2]
  i896.isFallbackOverlay = !!i897[3]
  i896.renderMode = i897[4]
  i896.renderOrder = i897[5]
  i896.sortingLayerName = i897[6]
  i896.sortingOrder = i897[7]
  i896.scaleFactor = i897[8]
  request.r(i897[9], i897[10], 0, i896, 'worldCamera')
  i896.overrideSorting = !!i897[11]
  i896.pixelPerfect = !!i897[12]
  i896.targetDisplay = i897[13]
  i896.overridePixelPerfect = !!i897[14]
  return i896
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i899 = data
  i898.m_UiScaleMode = i899[0]
  i898.m_ReferencePixelsPerUnit = i899[1]
  i898.m_ScaleFactor = i899[2]
  i898.m_ReferenceResolution = new pc.Vec2( i899[3], i899[4] )
  i898.m_ScreenMatchMode = i899[5]
  i898.m_MatchWidthOrHeight = i899[6]
  i898.m_PhysicalUnit = i899[7]
  i898.m_FallbackScreenDPI = i899[8]
  i898.m_DefaultSpriteDPI = i899[9]
  i898.m_DynamicPixelsPerUnit = i899[10]
  return i898
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i901 = data
  i900.m_IgnoreReversedGraphics = !!i901[0]
  i900.m_BlockingObjects = i901[1]
  i900.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i901[2] )
  return i900
}

Deserializers["Scope"] = function (request, data, root) {
  var i902 = root || request.c( 'Scope' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i902.scopeImgList = i904
  return i902
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Image' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_Sprite')
  i908.m_Type = i909[2]
  i908.m_PreserveAspect = !!i909[3]
  i908.m_FillCenter = !!i909[4]
  i908.m_FillMethod = i909[5]
  i908.m_FillAmount = i909[6]
  i908.m_FillClockwise = !!i909[7]
  i908.m_FillOrigin = i909[8]
  i908.m_UseSpriteMesh = !!i909[9]
  i908.m_PixelsPerUnitMultiplier = i909[10]
  request.r(i909[11], i909[12], 0, i908, 'm_Material')
  i908.m_Maskable = !!i909[13]
  i908.m_Color = new pc.Color(i909[14], i909[15], i909[16], i909[17])
  i908.m_RaycastTarget = !!i909[18]
  return i908
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Mask' )
  var i911 = data
  i910.m_ShowMaskGraphic = !!i911[0]
  return i910
}

Deserializers["CutoutMask"] = function (request, data, root) {
  var i912 = root || request.c( 'CutoutMask' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_Material')
  request.r(i913[2], i913[3], 0, i912, 'm_Sprite')
  i912.m_Type = i913[4]
  i912.m_PreserveAspect = !!i913[5]
  i912.m_FillCenter = !!i913[6]
  i912.m_FillMethod = i913[7]
  i912.m_FillAmount = i913[8]
  i912.m_FillClockwise = !!i913[9]
  i912.m_FillOrigin = i913[10]
  i912.m_UseSpriteMesh = !!i913[11]
  i912.m_PixelsPerUnitMultiplier = i913[12]
  i912.m_Maskable = !!i913[13]
  i912.m_Color = new pc.Color(i913[14], i913[15], i913[16], i913[17])
  i912.m_RaycastTarget = !!i913[18]
  return i912
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_FirstSelected')
  i914.m_sendNavigationEvents = !!i915[2]
  i914.m_DragThreshold = i915[3]
  return i914
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i917 = data
  i916.m_HorizontalAxis = i917[0]
  i916.m_VerticalAxis = i917[1]
  i916.m_SubmitButton = i917[2]
  i916.m_CancelButton = i917[3]
  i916.m_InputActionsPerSecond = i917[4]
  i916.m_RepeatDelay = i917[5]
  i916.m_ForceModuleActive = !!i917[6]
  return i916
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i919 = data
  return i918
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i920 = root || request.c( 'PlayerController' )
  var i921 = data
  i920.IsInteractive = !!i921[0]
  request.r(i921[1], i921[2], 0, i920, 'SniperGun')
  i920.CanShoot = !!i921[3]
  request.r(i921[4], i921[5], 0, i920, 'm_camera')
  i920.IsShooting = !!i921[6]
  i920.IsShowEnemyPopup = !!i921[7]
  request.r(i921[8], i921[9], 0, i920, 'scopeOverlay')
  i920.gunMovingPos = new pc.Vec3( i921[10], i921[11], i921[12] )
  i920._FOVscoped = i921[13]
  i920.leftCamBound = i921[14]
  i920.upCamBound = i921[15]
  i920.rightCamBound = i921[16]
  i920.downCamBound = i921[17]
  i920._FOVcache = i921[18]
  i920.smoothTime = i921[19]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i923 = data
  i922.playAutomatically = !!i923[0]
  request.r(i923[1], i923[2], 0, i922, 'clip')
  var i925 = i923[3]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.clips = i924
  i922.wrapMode = i923[4]
  i922.enabled = !!i923[5]
  return i922
}

Deserializers["GameManager1"] = function (request, data, root) {
  var i928 = root || request.c( 'GameManager1' )
  var i929 = data
  i928.IsShooting = !!i929[0]
  request.r(i929[1], i929[2], 0, i928, 'SniperGun')
  request.r(i929[3], i929[4], 0, i928, 'player')
  request.r(i929[5], i929[6], 0, i928, '_mainCam')
  request.r(i929[7], i929[8], 0, i928, 'canvasshooting')
  i928.itsOver = !!i929[9]
  request.r(i929[10], i929[11], 0, i928, 'guide')
  request.r(i929[12], i929[13], 0, i928, 'soundfx')
  request.r(i929[14], i929[15], 0, i928, 'eclose')
  request.r(i929[16], i929[17], 0, i928, 'ecwin')
  i928.numberofenemy = i929[18]
  request.r(i929[19], i929[20], 0, i928, 'backgroundFX')
  return i928
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i930 = root || request.c( 'SoundManager' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'reloadfx')
  request.r(i931[2], i931[3], 0, i930, 'gunfx')
  request.r(i931[4], i931[5], 0, i930, 'monsterdie')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'clip')
  i932.playOnAwake = !!i933[2]
  i932.loop = !!i933[3]
  i932.time = i933[4]
  i932.volume = i933[5]
  i932.pitch = i933[6]
  i932.enabled = !!i933[7]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i935 = data
  i934.ambientIntensity = i935[0]
  i934.reflectionIntensity = i935[1]
  i934.ambientMode = i935[2]
  i934.ambientLight = new pc.Color(i935[3], i935[4], i935[5], i935[6])
  i934.ambientSkyColor = new pc.Color(i935[7], i935[8], i935[9], i935[10])
  i934.ambientGroundColor = new pc.Color(i935[11], i935[12], i935[13], i935[14])
  i934.ambientEquatorColor = new pc.Color(i935[15], i935[16], i935[17], i935[18])
  i934.fogColor = new pc.Color(i935[19], i935[20], i935[21], i935[22])
  i934.fogEndDistance = i935[23]
  i934.fogStartDistance = i935[24]
  i934.fogDensity = i935[25]
  i934.fog = !!i935[26]
  request.r(i935[27], i935[28], 0, i934, 'skybox')
  i934.fogMode = i935[29]
  var i937 = i935[30]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i937[i + 0]) );
  }
  i934.lightmaps = i936
  i934.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i935[31], i934.lightProbes)
  i934.lightmapsMode = i935[32]
  i934.environmentLightingMode = i935[33]
  i934.ambientProbe = new pc.SphericalHarmonicsL2(i935[34])
  request.r(i935[35], i935[36], 0, i934, 'customReflection')
  request.r(i935[37], i935[38], 0, i934, 'defaultReflection')
  i934.defaultReflectionMode = i935[39]
  i934.defaultReflectionResolution = i935[40]
  i934.sunLightObjectId = i935[41]
  i934.pixelLightCount = i935[42]
  i934.defaultReflectionHDR = !!i935[43]
  i934.hasLightDataAsset = !!i935[44]
  i934.hasManualGenerate = !!i935[45]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'lightmapColor')
  request.r(i941[2], i941[3], 0, i940, 'lightmapDirection')
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i942 = root || new UnityEngine.LightProbes()
  var i943 = data
  return i942
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i949 = data
  i948.useSafeMode = !!i949[0]
  i948.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i949[1], i948.safeModeOptions)
  i948.timeScale = i949[2]
  i948.useSmoothDeltaTime = !!i949[3]
  i948.maxSmoothUnscaledTime = i949[4]
  i948.rewindCallbackMode = i949[5]
  i948.showUnityEditorReport = !!i949[6]
  i948.logBehaviour = i949[7]
  i948.drawGizmos = !!i949[8]
  i948.defaultRecyclable = !!i949[9]
  i948.defaultAutoPlay = i949[10]
  i948.defaultUpdateType = i949[11]
  i948.defaultTimeScaleIndependent = !!i949[12]
  i948.defaultEaseType = i949[13]
  i948.defaultEaseOvershootOrAmplitude = i949[14]
  i948.defaultEasePeriod = i949[15]
  i948.defaultAutoKill = !!i949[16]
  i948.defaultLoopType = i949[17]
  i948.showPreviewPanel = !!i949[18]
  i948.storeSettingsLocation = i949[19]
  i948.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i949[20], i948.modules)
  i948.showPlayingTweens = !!i949[21]
  i948.showPausedTweens = !!i949[22]
  return i948
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i950 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i951 = data
  i950.nestedTweenFailureBehaviour = i951[0]
  return i950
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i952 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i953 = data
  i952.showPanel = !!i953[0]
  i952.audioEnabled = !!i953[1]
  i952.physicsEnabled = !!i953[2]
  i952.physics2DEnabled = !!i953[3]
  i952.spriteEnabled = !!i953[4]
  i952.uiEnabled = !!i953[5]
  i952.textMeshProEnabled = !!i953[6]
  i952.tk2DEnabled = !!i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(i957[i + 0]);
  }
  i954.invalidShaderVariants = i956
  i954.name = i955[1]
  i954.guid = i955[2]
  var i959 = i955[3]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.shaderDefinedKeywords = i958
  var i961 = i955[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i961[i + 0]) );
  }
  i954.passes = i960
  var i963 = i955[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i963[i + 0]) );
  }
  i954.defaultParameterValues = i962
  request.r(i955[6], i955[7], 0, i954, 'unityFallbackShader')
  i954.readDepth = !!i955[8]
  i954.isCreatedByShaderGraph = !!i955[9]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i970 = root || new pc.UnityShaderPass()
  var i971 = data
  i970.passType = i971[0]
  i970.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[1], i970.zTest)
  i970.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[2], i970.zWrite)
  i970.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[3], i970.culling)
  i970.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i971[4], i970.blending)
  i970.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i971[5], i970.alphaBlending)
  i970.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[6], i970.colorWriteMask)
  i970.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[7], i970.offsetUnits)
  i970.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[8], i970.offsetFactor)
  i970.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[9], i970.stencilRef)
  i970.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[10], i970.stencilReadMask)
  i970.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[11], i970.stencilWriteMask)
  i970.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i971[12], i970.stencilOp)
  i970.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i971[13], i970.stencilOpFront)
  i970.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i971[14], i970.stencilOpBack)
  var i973 = i971[15]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i973[i + 0]) );
  }
  i970.tags = i972
  var i975 = i971[16]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i970.passDefinedKeywords = i974
  var i977 = i971[17]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i970.variants = i976
  i970.readDepth = !!i971[18]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i979 = data
  i978.val = i979[0]
  i978.name = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i981 = data
  i980.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[0], i980.src)
  i980.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[1], i980.dst)
  i980.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[2], i980.op)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i983 = data
  i982.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.pass)
  i982.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.fail)
  i982.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.zFail)
  i982.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[3], i982.comp)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i987 = data
  i986.name = i987[0]
  i986.value = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.vertexProgram = i991[1]
  i990.fragmentProgram = i991[2]
  i990.readDepth = !!i991[3]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i997 = data
  i996.name = i997[0]
  i996.type = i997[1]
  i996.value = new pc.Vec4( i997[2], i997[3], i997[4], i997[5] )
  i996.textureValue = i997[6]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i999 = data
  i998.name = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'texture')
  i998.aabb = i999[3]
  i998.vertices = i999[4]
  i998.triangles = i999[5]
  i998.textureRect = UnityEngine.Rect.MinMaxRect(i999[6], i999[7], i999[8], i999[9])
  i998.packedRect = UnityEngine.Rect.MinMaxRect(i999[10], i999[11], i999[12], i999[13])
  i998.border = new pc.Vec4( i999[14], i999[15], i999[16], i999[17] )
  i998.transparency = i999[18]
  i998.bounds = i999[19]
  i998.pixelsPerUnit = i999[20]
  i998.textureWidth = i999[21]
  i998.textureHeight = i999[22]
  i998.nativeSize = new pc.Vec2( i999[23], i999[24] )
  i998.pivot = new pc.Vec2( i999[25], i999[26] )
  i998.textureRectOffset = new pc.Vec2( i999[27], i999[28] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1001 = data
  i1000.name = i1001[0]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.wrapMode = i1003[1]
  i1002.isLooping = !!i1003[2]
  i1002.length = i1003[3]
  var i1005 = i1003[4]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1005[i + 0]) );
  }
  i1002.curves = i1004
  var i1007 = i1003[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1007[i + 0]) );
  }
  i1002.events = i1006
  i1002.halfPrecision = !!i1003[6]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1011 = data
  i1010.path = i1011[0]
  i1010.componentType = i1011[1]
  i1010.property = i1011[2]
  i1010.keys = i1011[3]
  var i1013 = i1011[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1013[i + 0]) );
  }
  i1010.objectReferenceKeys = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1017 = data
  i1016.time = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'value')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1021 = data
  i1020.functionName = i1021[0]
  i1020.floatParameter = i1021[1]
  i1020.intParameter = i1021[2]
  i1020.stringParameter = i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'objectReferenceParameter')
  i1020.time = i1021[6]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.ascent = i1023[1]
  i1022.originalLineHeight = i1023[2]
  i1022.fontSize = i1023[3]
  var i1025 = i1023[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1025[i + 0]) );
  }
  i1022.characterInfo = i1024
  request.r(i1023[5], i1023[6], 0, i1022, 'texture')
  i1022.originalFontSize = i1023[7]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1029 = data
  i1028.index = i1029[0]
  i1028.advance = i1029[1]
  i1028.bearing = i1029[2]
  i1028.glyphWidth = i1029[3]
  i1028.glyphHeight = i1029[4]
  i1028.minX = i1029[5]
  i1028.maxX = i1029[6]
  i1028.minY = i1029[7]
  i1028.maxY = i1029[8]
  i1028.uvBottomLeftX = i1029[9]
  i1028.uvBottomLeftY = i1029[10]
  i1028.uvBottomRightX = i1029[11]
  i1028.uvBottomRightY = i1029[12]
  i1028.uvTopLeftX = i1029[13]
  i1028.uvTopLeftY = i1029[14]
  i1028.uvTopRightX = i1029[15]
  i1028.uvTopRightY = i1029[16]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1031 = data
  i1030.name = i1031[0]
  var i1033 = i1031[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1033[i + 0]) );
  }
  i1030.states = i1032
  var i1035 = i1031[2]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1035[i + 0]) );
  }
  i1030.layers = i1034
  var i1037 = i1031[3]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1037[i + 0]) );
  }
  i1030.parameters = i1036
  var i1039 = i1031[4]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1030.animationClips = i1038
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1043 = data
  i1042.cycleOffset = i1043[0]
  i1042.cycleOffsetParameter = i1043[1]
  i1042.cycleOffsetParameterActive = !!i1043[2]
  i1042.mirror = !!i1043[3]
  i1042.mirrorParameter = i1043[4]
  i1042.mirrorParameterActive = !!i1043[5]
  i1042.motionId = i1043[6]
  i1042.nameHash = i1043[7]
  i1042.fullPathHash = i1043[8]
  i1042.speed = i1043[9]
  i1042.speedParameter = i1043[10]
  i1042.speedParameterActive = !!i1043[11]
  i1042.tag = i1043[12]
  i1042.name = i1043[13]
  i1042.writeDefaultValues = !!i1043[14]
  var i1045 = i1043[15]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1045[i + 0]) );
  }
  i1042.transitions = i1044
  var i1047 = i1043[16]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 2, i1046, '')
  }
  i1042.behaviours = i1046
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1051 = data
  i1050.fullPath = i1051[0]
  i1050.canTransitionToSelf = !!i1051[1]
  i1050.duration = i1051[2]
  i1050.exitTime = i1051[3]
  i1050.hasExitTime = !!i1051[4]
  i1050.hasFixedDuration = !!i1051[5]
  i1050.interruptionSource = i1051[6]
  i1050.offset = i1051[7]
  i1050.orderedInterruption = !!i1051[8]
  i1050.destinationStateNameHash = i1051[9]
  i1050.destinationStateMachineId = i1051[10]
  i1050.isExit = !!i1051[11]
  i1050.mute = !!i1051[12]
  i1050.solo = !!i1051[13]
  var i1053 = i1051[14]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1053[i + 0]) );
  }
  i1050.conditions = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1059 = data
  i1058.blendingMode = i1059[0]
  i1058.defaultWeight = i1059[1]
  i1058.name = i1059[2]
  i1058.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1059[3], i1058.stateMachine)
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1061 = data
  i1060.id = i1061[0]
  i1060.defaultStateNameHash = i1061[1]
  var i1063 = i1061[2]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1063[i + 0]) );
  }
  i1060.entryTransitions = i1062
  var i1065 = i1061[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1065[i + 0]) );
  }
  i1060.anyStateTransitions = i1064
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1069 = data
  i1068.destinationStateNameHash = i1069[0]
  i1068.destinationStateMachineId = i1069[1]
  i1068.isExit = !!i1069[2]
  i1068.mute = !!i1069[3]
  i1068.solo = !!i1069[4]
  var i1071 = i1069[5]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1071[i + 0]) );
  }
  i1068.conditions = i1070
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1075 = data
  i1074.defaultBool = !!i1075[0]
  i1074.defaultFloat = i1075[1]
  i1074.defaultInt = i1075[2]
  i1074.name = i1075[3]
  i1074.nameHash = i1075[4]
  i1074.type = i1075[5]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1079[i + 0]) );
  }
  i1076.files = i1078
  i1076.componentToPrefabIds = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1083 = data
  i1082.path = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'unityObject')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1087[i + 0]) );
  }
  i1084.scriptsExecutionOrder = i1086
  var i1089 = i1085[1]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1089[i + 0]) );
  }
  i1084.sortingLayers = i1088
  var i1091 = i1085[2]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1091[i + 0]) );
  }
  i1084.cullingLayers = i1090
  i1084.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1085[3], i1084.timeSettings)
  i1084.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1085[4], i1084.physicsSettings)
  i1084.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1085[5], i1084.physics2DSettings)
  i1084.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1085[6], i1084.qualitySettings)
  i1084.removeShadows = !!i1085[7]
  i1084.autoInstantiatePrefabs = !!i1085[8]
  i1084.enableAutoInstancing = !!i1085[9]
  i1084.lightmapEncodingQuality = i1085[10]
  i1084.desiredColorSpace = i1085[11]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.value = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  i1098.value = i1099[2]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1105 = data
  i1104.fixedDeltaTime = i1105[0]
  i1104.maximumDeltaTime = i1105[1]
  i1104.timeScale = i1105[2]
  i1104.maximumParticleTimestep = i1105[3]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1107 = data
  i1106.gravity = new pc.Vec3( i1107[0], i1107[1], i1107[2] )
  i1106.defaultSolverIterations = i1107[3]
  i1106.bounceThreshold = i1107[4]
  i1106.autoSyncTransforms = !!i1107[5]
  i1106.autoSimulation = !!i1107[6]
  var i1109 = i1107[7]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1109[i + 0]) );
  }
  i1106.collisionMatrix = i1108
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1113 = data
  i1112.enabled = !!i1113[0]
  i1112.layerId = i1113[1]
  i1112.otherLayerId = i1113[2]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'material')
  i1114.gravity = new pc.Vec2( i1115[2], i1115[3] )
  i1114.positionIterations = i1115[4]
  i1114.velocityIterations = i1115[5]
  i1114.velocityThreshold = i1115[6]
  i1114.maxLinearCorrection = i1115[7]
  i1114.maxAngularCorrection = i1115[8]
  i1114.maxTranslationSpeed = i1115[9]
  i1114.maxRotationSpeed = i1115[10]
  i1114.timeToSleep = i1115[11]
  i1114.linearSleepTolerance = i1115[12]
  i1114.angularSleepTolerance = i1115[13]
  i1114.defaultContactOffset = i1115[14]
  i1114.autoSimulation = !!i1115[15]
  i1114.queriesHitTriggers = !!i1115[16]
  i1114.queriesStartInColliders = !!i1115[17]
  i1114.callbacksOnDisable = !!i1115[18]
  i1114.reuseCollisionCallbacks = !!i1115[19]
  i1114.autoSyncTransforms = !!i1115[20]
  var i1117 = i1115[21]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1117[i + 0]) );
  }
  i1114.collisionMatrix = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1121 = data
  i1120.enabled = !!i1121[0]
  i1120.layerId = i1121[1]
  i1120.otherLayerId = i1121[2]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1125[i + 0]) );
  }
  i1122.qualityLevels = i1124
  var i1127 = i1123[1]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1122.names = i1126
  i1122.shadows = i1123[2]
  i1122.anisotropicFiltering = i1123[3]
  i1122.antiAliasing = i1123[4]
  i1122.lodBias = i1123[5]
  i1122.shadowCascades = i1123[6]
  i1122.shadowDistance = i1123[7]
  i1122.shadowmaskMode = i1123[8]
  i1122.shadowProjection = i1123[9]
  i1122.shadowResolution = i1123[10]
  i1122.softParticles = !!i1123[11]
  i1122.softVegetation = !!i1123[12]
  i1122.activeColorSpace = i1123[13]
  i1122.desiredColorSpace = i1123[14]
  i1122.masterTextureLimit = i1123[15]
  i1122.maxQueuedFrames = i1123[16]
  i1122.particleRaycastBudget = i1123[17]
  i1122.pixelLightCount = i1123[18]
  i1122.realtimeReflectionProbes = !!i1123[19]
  i1122.shadowCascade2Split = i1123[20]
  i1122.shadowCascade4Split = new pc.Vec3( i1123[21], i1123[22], i1123[23] )
  i1122.streamingMipmapsActive = !!i1123[24]
  i1122.vSyncCount = i1123[25]
  i1122.asyncUploadBufferSize = i1123[26]
  i1122.asyncUploadTimeSlice = i1123[27]
  i1122.billboardsFaceCameraPosition = !!i1123[28]
  i1122.shadowNearPlaneOffset = i1123[29]
  i1122.streamingMipmapsMemoryBudget = i1123[30]
  i1122.maximumLODLevel = i1123[31]
  i1122.streamingMipmapsAddAllCameras = !!i1123[32]
  i1122.streamingMipmapsMaxLevelReduction = i1123[33]
  i1122.streamingMipmapsRenderersPerFrame = i1123[34]
  i1122.resolutionScalingFixedDPIFactor = i1123[35]
  i1122.streamingMipmapsMaxFileIORequests = i1123[36]
  i1122.currentQualityLevel = i1123[37]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1133 = data
  i1132.weight = i1133[0]
  i1132.vertices = i1133[1]
  i1132.normals = i1133[2]
  i1132.tangents = i1133[3]
  return i1132
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1135 = data
  i1134.xPlacement = i1135[0]
  i1134.yPlacement = i1135[1]
  i1134.xAdvance = i1135[2]
  i1134.yAdvance = i1135[3]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1139 = data
  i1138.mode = i1139[0]
  i1138.parameter = i1139[1]
  i1138.threshold = i1139[2]
  return i1138
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[30],"67":[12],"68":[11],"69":[11],"70":[11],"71":[11],"72":[11],"73":[11],"35":[11],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[12],"89":[4],"90":[91],"92":[91],"40":[23],"47":[24,23],"93":[23],"94":[24,23],"42":[40],"44":[24,23],"95":[23],"41":[40],"96":[23],"97":[23],"98":[23],"99":[23],"100":[23],"101":[23],"102":[23],"46":[23],"103":[24,23],"104":[24,23],"105":[23],"106":[23],"107":[23],"108":[23],"109":[24,23],"110":[23],"111":[48],"112":[48],"49":[48],"113":[48],"114":[12],"115":[12],"116":[23],"117":[24,23],"118":[4],"119":[24,23],"120":[24,23],"26":[4,24,23],"121":[23,24],"122":[23]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.MonoBehaviour","Apartment","BrokenBuilding","Brick","UnityEngine.Rigidbody","UnityEngine.Camera","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CapsuleCollider","NormalBullet","UnityEngine.GameObject","BulletRotation","BulletCameraController","UnityEngine.TrailRenderer","AutoDestructor","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.Font","AutoDestroy","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EnemyScript","UnityEngine.ConfigurableJoint","UnityEngine.Cubemap","UnityEngine.Light","UnityEngine.AudioListener","NormalGun","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Scope","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Mask","CutoutMask","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","PlayerController","UnityEngine.Animation","UnityEngine.AnimationClip","GameManager1","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.33f1";

Deserializers.productName = "GiantWantedPlayable";

Deserializers.lunaInitializationTime = "03/30/2022 03:35:59";

Deserializers.lunaVersion = "3.4.1";

Deserializers.lunaSHA = "329c363da8003b29e1d40d67943fea88087d5759";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.14.1,com.unity.ide.rider: 1.2.1,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 2.1.6,com.unity.timeline: 1.2.18,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:../../../../../Luna/3.4.1/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.GiantWantedPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "225b5d6f-1df8-4ad5-8357-8c28ba0f77bb";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

