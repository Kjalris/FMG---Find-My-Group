import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common';
import { AreaService } from '../area/area.service';
import { GetGroupDto } from './dto/get-group.dto';
import { Group } from './entities/group.entity';
import { GroupService } from './group.service';

@Controller('groups')
export class GroupController {
  constructor(
    private readonly groupService: GroupService,
    private readonly areaService: AreaService,
  ) {}

  // @Post()
  // private createGroup() {}

  @Get(':id')
  private getGroup(
    @Param(new ValidationPipe({ transform: true })) params: GetGroupDto,
  ): Promise<Group> {
    return this.groupService.get(params.id);
  }

  @Get(':group_id/area')
  private getArea(
    @Param('group_id', ParseUUIDPipe) group_id: string,
  ): Promise<any> {
    return this.areaService.get(group_id);
  }
}
